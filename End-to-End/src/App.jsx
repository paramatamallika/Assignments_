import { Routes, Route } from "react-router-dom";
import LoginForm from "./pages/login";
import SignupForm from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
   <Routes>
  <Route path="/" element={<LoginForm />} />
  <Route path="/login" element={<LoginForm />} />  {/* ✅ add this */}
  <Route path="/signup" element={<SignupForm />} />
  <Route path="/dashboard" element={<Dashboard />} />
</Routes>

  );
}

export default App;
