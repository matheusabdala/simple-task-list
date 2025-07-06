import { useState } from "react";
import { AddTask } from "./components/AddTask";
import { Tasks } from "./components/Tasks";

export function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Fazer Café",
      description: "descrição da tarefa atual",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar programação",
      description: "descrição da tarefa atual",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Berber água",
      description: "descrição da tarefa atual",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} />
      </div>
    </div>
  );
}
