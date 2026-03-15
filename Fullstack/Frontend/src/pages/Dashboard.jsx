import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [user, setUser] = useState({ name: "User" }); // optional, can update from token

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // Get balance
        const resBalance = await axios.get(
          "http://localhost:5000/api/account/balance",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setBalance(resBalance.data.balance);

        // Get transactions
        const resTxns = await axios.get(
          "http://localhost:5000/api/account/statement",
          { headers: { Authorization: `Bearer ${token}` } }
        );

        // safely set transactions array
        setTransactions(resTxns.data.transactions || []);
      } catch (err) {
        console.error("Dashboard fetch error: ", err.response || err);
        alert("Failed to fetch dashboard. Please login again.");
        navigate("/login");
      }
    };

    fetchDashboardData();
  }, [token, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div style={{ maxWidth: "900px", margin: "50px auto", textAlign: "center" }}>
      <h2>Welcome, {user.name}!</h2>

      <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "10px", margin: "20px 0" }}>
        <h3>Current Balance</h3>
        <p style={{ fontSize: "24px", fontWeight: "bold" }}>₹{balance}</p>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginBottom: "30px" }}>
        <button onClick={() => navigate("/send")} style={{ padding: "10px 20px", cursor: "pointer" }}>Send Money</button>
        <button onClick={() => navigate("/statement")} style={{ padding: "10px 20px", cursor: "pointer" }}>Account Statement</button>
        <button onClick={handleLogout} style={{ padding: "10px 20px", cursor: "pointer", backgroundColor: "red", color: "white" }}>Logout</button>
      </div>

      <div>
        <h3>Recent Transactions</h3>
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
            {transactions.length === 0 ? (
              <tr>
                <td colSpan="5" style={{ textAlign: "center", padding: "10px" }}>No recent transactions</td>
              </tr>
            ) : (
              transactions.slice(0, 5).map((txn) => (
                <tr
                  key={txn.id}
                  style={{
                    color: txn.transaction_type === "Credit" ? "green" : "red",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  <td>{new Date(txn.created_at).toLocaleDateString()}</td>
                  <td>{txn.transaction_type}</td>
                  <td>₹{txn.amount}</td>
                  <td>{txn.sender_name}</td>
                  <td>{txn.receiver_name}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;