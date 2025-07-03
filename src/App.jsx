import { AddTask } from "./components/AddTask";
import { Tasks } from "./components/Tasks";

export function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programação",
      description: "Estudar programação para se tornar um grande dev",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar programação",
      description: "Estudar programação para se tornar um grande dev",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar programação",
      description: "Estudar programação para se tornar um grande dev",
      isCompleted: false,
    },
  ]);
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask />
        <Tasks />
      </div>
    </div>
  );
}
