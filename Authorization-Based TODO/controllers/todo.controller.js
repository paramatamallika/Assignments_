const supabase = require("../config/supabase");

exports.createTodo = async (req, res) => {
  const { title } = req.body;
  const userId = req.user.userId;

  const { data, error } = await supabase
    .from("todos")
    .insert([{ title, completed: false, userId }]);

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  res.status(201).json({ message: "Todo created", data });
};

exports.getTodos = async (req, res) => {
  const userId = req.user.userId;

  const { data, error } = await supabase
    .from("todos")
    .select("*")
    .eq("userId", userId);

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  res.json(data);
};

exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.userId;

  const { data: todo } = await supabase
    .from("todos")
    .select("*")
    .eq("id", id)
    .single();

  if (!todo || todo.userId !== userId) {
    return res.status(403).json({ message: "Access denied" });
  }

  const { error } = await supabase
    .from("todos")
    .update(req.body)
    .eq("id", id);

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  res.json({ message: "Todo updated" });
};

exports.deleteTodo = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.userId;

  const { data: todo } = await supabase
    .from("todos")
    .select("*")
    .eq("id", id)
    .single();

  if (!todo || todo.userId !== userId) {
    return res.status(403).json({ message: "Access denied" });
  }

  await supabase.from("todos").delete().eq("id", id);

  res.json({ message: "Todo deleted" });
};
