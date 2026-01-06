

import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Signup() {
  const { signup } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="p-6 max-w-sm mx-auto">
      <Input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <Input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <Button className="mt-4" onClick={() => signup(email, password)}>Signup</Button>
    </div>
  );
}
