import supabase from "../config/supabaseClient.js";

// Get user balance
export const getBalance = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("balance")
      .eq("id", req.user.id)
      .single();

    if (error || !data) return res.status(400).json({ message: error?.message || "User not found" });

    res.json({ balance: data.balance });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all users (for sending money)
export const getUsers = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("id,name,email");

    if (error) return res.status(400).json({ message: error.message });

    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Transfer money
export const transferMoney = async (req, res) => {
  try {
    const { receiverId, amount } = req.body;
    const senderId = req.user.id;

    const { data: sender } = await supabase
      .from("users")
      .select("*")
      .eq("id", senderId)
      .single();

    if (!sender) return res.status(404).json({ message: "Sender not found" });
    if (sender.balance < amount) return res.status(400).json({ message: "Insufficient balance" });

    const { data: receiver } = await supabase
      .from("users")
      .select("*")
      .eq("id", receiverId)
      .single();

    if (!receiver) return res.status(404).json({ message: "Receiver not found" });

    // Update balances
    await supabase
      .from("users")
      .update({ balance: sender.balance - amount })
      .eq("id", senderId);

    await supabase
      .from("users")
      .update({ balance: receiver.balance + amount })
      .eq("id", receiverId);

    // Insert transaction entries: debit for sender, credit for receiver
    await supabase.from("transactions").insert([
      {
        sender_id: senderId,
        receiver_id: receiverId,
        amount,
        transaction_type: "debit",
      },
      {
        sender_id: receiverId,
        receiver_id: senderId,
        amount,
        transaction_type: "credit",
      },
    ]);

    res.json({ message: "Transfer Successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Get transaction statement
export const getStatement = async (req, res) => {
  try {
    const userId = req.user.id;

    const { data: transactions, error } = await supabase
      .from("transactions")
      .select("*")
      .or(`sender_id.eq.${userId},receiver_id.eq.${userId}`)
      .order("created_at", { ascending: false });

    if (error) return res.status(400).json({ message: error.message });

    // Add sender_name / receiver_name for frontend display
    const detailedTxns = await Promise.all(
      transactions.map(async (txn) => {
        const { data: sender } = await supabase
          .from("users")
          .select("name")
          .eq("id", txn.sender_id)
          .single();
        const { data: receiver } = await supabase
          .from("users")
          .select("name")
          .eq("id", txn.receiver_id)
          .single();

        return {
          ...txn,
          sender_name: sender?.name || "You",
          receiver_name: receiver?.name || "You",
        };
      })
    );

    res.json({ transactions: detailedTxns });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};