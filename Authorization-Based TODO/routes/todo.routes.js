const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo
} = require("../controllers/todo.controller");

const router = express.Router();

router.use(authMiddleware);

router.post("/", createTodo);
router.get("/", getTodos);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;
