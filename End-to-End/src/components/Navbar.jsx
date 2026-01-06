import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { logout } = useAuth();
  return (
    <div className="p-4 bg-gray-200 flex justify-between">
      <h1>Todos App</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
