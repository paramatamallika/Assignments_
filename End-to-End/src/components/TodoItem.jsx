import { Checkbox } from "@/components/ui/checkbox";
import { updateTodo, deleteTodo } from "../services/todo.service";

export default function TodoItem({ todo }) {
  return (
    <div className="flex items-center gap-2">
      <Checkbox
        checked={todo.completed}
        onCheckedChange={() =>
          updateTodo(todo.id, { completed: !todo.completed })
        }
      />
      <span>{todo.title}</span>
      <button onClick={() => deleteTodo(todo.id)}>❌</button>
    </div>
  );
}
