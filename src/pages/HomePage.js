import { useContext } from "react";
import TaskForm from "../components/task/TaskForm";
import TaskList from "../components/task/TaskList";
import TaskContext from "../context/TaskContext";

export default function HomePage() {
  const { showTaskForm } = useContext(TaskContext);

  return (
    <div>
      {showTaskForm && <TaskForm />}
      <TaskList />
    </div>
  );
}
