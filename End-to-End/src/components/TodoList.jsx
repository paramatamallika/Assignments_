import { useEffect, useState } from "react";
import { addTodo, getTodos } from "../services/todo.service";
import TodoItem from "./TodoItem";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    getTodos().then(setTodos);
  }, []);

  const handleAdd = async () => {
    await addTodo({ title: text, completed: false });
    setTodos(await getTodos());
    setText("");
  };

  return (
    <div className="p-4">
      <Input value={text} onChange={e => setText(e.target.value)} />
      <Button className="mt-2" onClick={handleAdd}>Add Todo</Button>
      {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
    </div>
  );
}
