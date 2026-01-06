import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import
import { loginUser } from "../services/auth.service";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // ✅ This gives you navigation ability

  const handleLogin = async () => {
    if (!email || !password) return alert("Enter email and password");

    setLoading(true);
    try {
      const user = await loginUser(email.trim(), password.trim());
      alert("Login successful! Welcome " + user.email);

      // ✅ Navigate to dashboard after login
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>
    </div>
  );
}

export default LoginForm;
