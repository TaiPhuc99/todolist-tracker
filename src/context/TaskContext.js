import { createContext, useEffect, useState } from "react";
import { TaskService } from "../services/TaskService";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [showTaskForm, setShowTaskForm] = useState(false);

  // Fetch All Task API
  useEffect(() => {
    const getTasksFromServer = async () => {
      const response = await TaskService.getTasks();
      const data = await response.data;
      setTasks(data);
    };

    getTasksFromServer();
  }, []);

  // Fetch Task API by ID
  const fetchTaskByID = async (idTask) => {
    const response = await TaskService.getTaskByID(idTask);
    const data = await response.data;
    return data;
  };

  // Delete Task
  const handleDeleteTask = async (idTask) => {
    await TaskService.deleteTask(idTask);
    setTasks(
      tasks.filter((task) => {
        return task.id !== idTask;
      })
    );
  };

  // Handle Show Task Form
  const handleShowTaskForm = () => {
    setShowTaskForm(!showTaskForm);
  };

  // Handle Add New Task
  const handleAddNewTask = async (newTask) => {
    const response = await TaskService.addTask(newTask);
    const data = await response.data;
    setTasks([...tasks, data]);
  };

  // Toggle Reminder
  const toggleReminder = async (idTask) => {
    const taskToToggle = await fetchTaskByID(idTask);
    const updateTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
    const response = await TaskService.updateTask(idTask, updateTask);
    const data = await response.data;
    setTasks(
      tasks.map((task) => {
        return task.id === idTask ? { ...task, reminder: data.reminder } : task;
      })
    );
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        showTaskForm,
        handleDeleteTask,
        handleShowTaskForm,
        handleAddNewTask,
        toggleReminder,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
