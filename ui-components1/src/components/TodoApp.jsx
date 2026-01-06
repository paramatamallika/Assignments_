import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function TodoApp() {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (!todoText) return;
    setTodos([...todos, { text: todoText, completed: false }]);
    setTodoText("");
  };

  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <Card className="max-w-md mx-auto mt-6">
      <CardContent className="space-y-4">
        <h2 className="text-xl font-bold">Todo List</h2>

        <div className="flex gap-2">
          <Input
            placeholder="Enter todo"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
          <Button onClick={addTodo}>Add</Button>
        </div>

        {todos.map((todo, index) => (
          <div key={index} className="flex items-center gap-2">
            <Checkbox
              checked={todo.completed}
              onCheckedChange={() => toggleTodo(index)}
            />
            <span className={todo.completed ? "line-through" : ""}>
              {todo.text}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
