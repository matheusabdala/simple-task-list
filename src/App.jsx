import { AddTask } from "./components/AddTask";
import { Tasks } from "./components/Tasks";

import { useEffect, useState } from "react";
import { v4 } from "uuid";

export function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  const [filteredTasks, setFilteredTasks] = useState(tasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    setFilteredTasks(tasks);
  }, [tasks]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onTrashClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  function onTypeFilter(inputValue) {
    if (inputValue.trim()) {
      const filtTasks = tasks.filter((task) =>
        task.title.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredTasks(filtTasks);
    } else {
      setFilteredTasks(tasks);
    }
  }

  return (
    <div className="w-screen h-screen bg-purple-600 overflow-auto flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={filteredTasks}
          onTaskClick={onTaskClick}
          onTrashClick={onTrashClick}
          onTypeFilter={onTypeFilter}
        />
      </div>
    </div>
  );
}
