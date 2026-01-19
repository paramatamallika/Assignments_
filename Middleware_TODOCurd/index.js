const express = require("express");
const todoRouter = require("./routes/todos.routes");
const loggerMiddleware = require("./middleware/logger.middleware");

const app = express();
const PORT = 3000;

// JSON middleware
app.use(express.json());

// App-level logging middleware
app.use(loggerMiddleware);

// Todo routes
app.use("/todos", todoRouter);

// Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
