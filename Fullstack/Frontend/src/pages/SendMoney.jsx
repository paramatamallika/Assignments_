import { useState } from "react";
import axios from "axios";

function SendMoney(){

  const [receiverId,setReceiverId] = useState("");
  const [amount,setAmount] = useState("");

  const token = localStorage.getItem("token");

  const sendMoney = async () => {

    await axios.post(
      "http://localhost:5000/api/account/transfer",
      {
        receiverId,
        amount
      },
      {
        headers:{
          Authorization:`Bearer ${token}`
        }
      }
    );

    alert("Transfer Successful");

  };

  return (

    <div>

      <h2>Send Money</h2>

      <input
        placeholder="Receiver ID"
        onChange={(e)=>setReceiverId(e.target.value)}
      />

      <input
        placeholder="Amount"
        onChange={(e)=>setAmount(e.target.value)}
      />

      <button onClick={sendMoney}>Send</button>

    </div>

  );
}

export default SendMoney;