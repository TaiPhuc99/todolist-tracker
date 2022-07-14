import React, { useContext } from "react";
import TaskContext from "../../context/TaskContext";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const { tasks } = useContext(TaskContext);

  // Check Whether have tasks
  if (tasks.length === 0) {
    return <p>No Tasks To Show</p>;
  }

  return (
    <div>
      {tasks.map((taskItemContent, index) => {
        return (
          <TaskItem key={`task-${index}`} taskItemContent={taskItemContent} />
        );
      })}
    </div>
  );
}
