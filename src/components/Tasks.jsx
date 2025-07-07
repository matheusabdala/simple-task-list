import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { Input } from "./Input";
import { useState } from "react";

export function Tasks({ tasks, onTaskClick, onTrashClick, onTypeFilter }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      <Input
        type="text"
        placeholder="Digite o filtro da tarefa"
        onChange={(event) => onTypeFilter(event.target.value)}
      />
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`${
              task.isCompleted ? "bg-green-500" : "bg-purple-600"
            }  text-left w-full text-white p-2 rounded-md cursor-pointer`}
          >
            {task.title} {task.isCompleted && "✅"}
          </button>
          <Button
            onClick={() => onSeeDetailsClick(task)}
            className="bg-slate-400 p-2 rounded-md text-white cursor-pointer"
          >
            <ChevronRightIcon />
          </Button>
          <Button
            onClick={() => onTrashClick(task.id)}
            className="bg-slate-400 p-2 rounded-md text-white cursor-pointer"
          >
            <TrashIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
}
