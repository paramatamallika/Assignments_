import { useEffect, useState } from "react";
import axios from "axios";

function Statement() {
  const [transactions, setTransactions] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/account/statement", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Make sure transactions is an array
        setTransactions(res.data.transactions || []);
      } catch (err) {
        console.error("Failed to fetch statement:", err.response || err);
        setTransactions([]);
      }
    };

    fetchData();
  }, [token]);

  return (
    <div style={{ maxWidth: "800px", margin: "50px auto", textAlign: "center" }}>
      <h2>Account Statement</h2>

      {transactions.length === 0 ? (
        <p>No transactions yet.</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "2px solid #ccc" }}>
              <th>Date</th>
              <th>Type</th>
              <th>Amount</th>
              <th>From</th>
              <th>To</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t) => (
              <tr
                key={t.id}
                style={{
                  color: t.transaction_type.toLowerCase() === "credit" ? "green" : "red",
                  borderBottom: "1px solid #eee",
                }}
              >
                <td>{new Date(t.created_at).toLocaleString()}</td>
                <td>{t.transaction_type}</td>
                <td>₹{t.amount}</td>
                <td>{t.sender_name || "You"}</td>
                <td>{t.receiver_name || "You"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Statement;