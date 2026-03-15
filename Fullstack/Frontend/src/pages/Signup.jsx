import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:5000/api/auth/signup",
        { name, email, password }
      );

      alert("Signup successful");

      navigate("/"); // redirect to login

    } catch (error) {

      console.log(error);
      alert("Signup failed");

    }

  };

  return (

    <div>

      <h2>Signup</h2>

      <form onSubmit={handleSignup}>

        <input
          placeholder="Name"
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          placeholder="Email"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button type="submit">Signup</button>

      </form>

    </div>

  );

}

export default Signup;