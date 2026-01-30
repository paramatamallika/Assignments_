import { supabase } from '../db/supabaseClient.js';

// Add a new Todo
export const addTodo = async (req, res) => {
  const { title, description, userId } = req.body;
  if (!title || !userId)
    return res.status(400).json({ error: 'Title and userId are required' });

  try {
    const { data: user, error: userError } = await supabase
      .from('users')
      .select('*')
      .eq('id', userId)
      .maybeSingle(); // safe even if user does not exist

    if (userError) return res.status(500).json({ error: userError.message });
    if (!user) return res.status(404).json({ error: 'User not found' });

    const { data, error } = await supabase
      .from('todos')
      .insert([{ title, description, user_id: userId }])
      .select(); // important to return the inserted row

    if (error) return res.status(500).json({ error: error.message });

    res.status(201).json({ message: 'Todo added', todo: data[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get Todos for a specific user
export const getUserTodos = async (req, res) => {
  const { userId } = req.params;
  try {
    const { data: todos, error } = await supabase
      .from('todos')
      .select('*')
      .eq('user_id', userId);

    if (error) return res.status(500).json({ error: error.message });
    res.json({ todos });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update a Todo by ID
export const updateTodo = async (req, res) => {
  const { todoId } = req.params;
  const { title, description, is_completed } = req.body;

  try {
    const { data: existing } = await supabase
      .from('todos')
      .select('*')
      .eq('id', todoId)
      .maybeSingle();

    if (!existing) return res.status(404).json({ error: 'Todo not found' });

    const { data, error } = await supabase
      .from('todos')
      .update({ title, description, is_completed })
      .eq('id', todoId)
      .select();

    if (error) return res.status(500).json({ error: error.message });

    res.json({ message: 'Todo updated', todo: data[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a Todo by ID
export const deleteTodo = async (req, res) => {
  const { todoId } = req.params;

  try {
    const { data, error } = await supabase
      .from('todos')
      .delete()
      .eq('id', todoId)
      .select();

    if (error) return res.status(500).json({ error: error.message });
    if (!data || data.length === 0) return res.status(404).json({ error: 'Todo not found' });

    res.json({ message: 'Todo deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
