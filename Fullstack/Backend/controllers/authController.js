// backend/controllers/authController.js
import supabase from "../config/supabaseClient.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields required" });
  }

  // default initial balance
  const { data, error } = await supabase
    .from("users")
    .insert([{ name, email, password, balance: 10000 }]);

  if (error) return res.status(400).json({ message: error.message });

  res.status(200).json({ message: "Signup successful" });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password required" });
  }

  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .eq("password", password)
    .single();

  if (error || !data) return res.status(401).json({ message: "Invalid credentials" });

  // ✅ Sign a JWT token
  const token = jwt.sign(
    { id: data.id, name: data.name, email: data.email },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
  

  res.status(200).json({ message: "Login successful", token, user: data });
};
export const getStatement = async (req, res) => {
  const { data, error } = await supabase
    .from("transactions")
    .select("*, sender_id, receiver_id")
    .or(`sender_id.eq.${req.user.id},receiver_id.eq.${req.user.id}`)
    .order("created_at", { ascending: false });

  if (error) return res.status(400).json({ message: error.message });

  // Always return an array
  res.json({ transactions: data || [] });
};