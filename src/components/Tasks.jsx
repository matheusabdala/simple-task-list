import { ChevronRightIcon, TrashIcon } from "lucide-react";

export function Tasks({ tasks, onTaskClick, onTrashClick }) {
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`${
              task.isCompleted && "line-through"
            } bg-slate-400 text-left w-full text-white p-2 rounded-md cursor-pointer`}
          >
            {task.title}
          </button>
          <button className="bg-slate-400 p-2 rounded-md text-white cursor-pointer">
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => onTrashClick(task.id)}
            className="bg-slate-400 p-2 rounded-md text-white cursor-pointer"
          >
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}
