import React, { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import TaskContext from "../context/TaskContext";

export default function TaskItem({ taskItemContent }) {
  const { handleDeleteTask, toggleReminder } = useContext(TaskContext);

  return (
    <div
      className={`task ${taskItemContent.reminder && "reminder"}`}
      onDoubleClick={() => {
        toggleReminder(taskItemContent.id);
      }}
    >
      <h3>
        {taskItemContent.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => {
            handleDeleteTask(taskItemContent.id);
          }}
        />
      </h3>
      <p>{taskItemContent.day}</p>
    </div>
  );
}
