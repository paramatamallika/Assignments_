const express = require("express");
require("dotenv").config();

const authRoutes = require("./routes/auth.routes");
const todoRoutes = require("./routes/todo.routes");

const app = express();
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api/todos", todoRoutes);

module.exports = app;
