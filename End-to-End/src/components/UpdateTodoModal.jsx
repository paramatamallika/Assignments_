import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function UpdateTodoModal({ open, todo, onSave, onClose }) {
  const [text, setText] = useState(todo?.title || "");

  return (
    <Dialog open={open}>
      <DialogContent>
        <Input value={text} onChange={e => setText(e.target.value)} />
        <div className="flex gap-2 mt-4">
          <Button onClick={() => onSave(text)}>Save</Button>
          <Button className="bg-gray-300 text-black" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
