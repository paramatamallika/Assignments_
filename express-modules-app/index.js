const express = require("express");
const app = express();

const PORT = 3000;

// Test route
app.get("/test", (req, res) => {
  res.send("Test route is working!");
});

app.listen(PORT, () => {
  console.log(`✅ CORRECT INDEX.JS IS RUNNING on port ${PORT}`);
});
