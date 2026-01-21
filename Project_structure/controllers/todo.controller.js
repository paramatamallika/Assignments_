import { getDB, saveDB } from "../models/todo.model.js";

export const getTodos = async (req, res) => {
  try {
    const db = await getDB();
    res.status(200).json(db.todos);
  } catch (error) {
    res.status(500).json({ message: "Error fetching todos" });
  }
};

export const createTodo = async (req, res) => {
  try {
    const { title } = req.body;
    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const db = await getDB();
    const newTodo = {
      id: Date.now(),
      title,
      completed: false
    };

    db.todos.push(newTodo);
    await saveDB(db);

    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ message: "Error creating todo" });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const db = await getDB();

    const todo = db.todos.find(t => t.id == id);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    todo.completed = !todo.completed;
    await saveDB(db);

    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: "Error updating todo" });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const db = await getDB();

    const index = db.todos.findIndex(t => t.id == id);
    if (index === -1) {
      return res.status(404).json({ message: "Todo not found" });
    }

    db.todos.splice(index, 1);
    await saveDB(db);

    res.status(200).json({ message: "Todo deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting todo" });
  }
};
