import { ChevronRightIcon } from "lucide-react";

export function Tasks(props) {
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => props.onTaskClick(task.id)}
            className={`${
              task.isCompleted && "line-through"
            } bg-slate-400 text-left w-full text-white p-2 rounded-md cursor-pointer`}
          >
            {task.title}
          </button>
          <button className="bg-slate-400 p-2 rounded-md text-white cursor-pointer">
            <ChevronRightIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}
