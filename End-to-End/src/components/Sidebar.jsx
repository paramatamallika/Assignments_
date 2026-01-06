import { NavLink } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

export default function Sidebar() {
  return (
    <Card className="w-64 min-h-screen">
      <CardContent className="p-4">
        <h2 className="text-xl font-bold mb-6">Todo App</h2>

        <nav className="flex flex-col gap-4">
          <NavLink
            to="/todos"
            className={({ isActive }) =>
              `p-2 rounded-md ${
                isActive ? "bg-black text-white" : "hover:bg-gray-200"
              }`
            }
          >
            Todos
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              `p-2 rounded-md ${
                isActive ? "bg-black text-white" : "hover:bg-gray-200"
              }`
            }
          >
            Login
          </NavLink>

          <NavLink
            to="/signup"
            className={({ isActive }) =>
              `p-2 rounded-md ${
                isActive ? "bg-black text-white" : "hover:bg-gray-200"
              }`
            }
          >
            Signup
          </NavLink>
        </nav>
      </CardContent>
    </Card>
  );
}
