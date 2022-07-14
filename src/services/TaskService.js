import axios from "axios";
import { BASE_URL } from "./ConfigURL";

export const TaskService = {
  getTasks: () => {
    return axios.get(`${BASE_URL}`);
  },

  getTaskByID: (idTask) => {
    return axios.get(`${BASE_URL}/${idTask}`);
  },

  deleteTask: (idTask) => {
    return axios.delete(`${BASE_URL}/${idTask}`);
  },

  addTask: (newTask) => {
    return axios({
      method: "POST",
      url: `${BASE_URL}`,
      data: newTask,
      headers: {
        "Content-type": "application/json",
      },
    });
  },

  updateTask: (idTask, updateTask) => {
    return axios({
      method: "PUT",
      url: `${BASE_URL}/${idTask}`,
      data: updateTask,
      headers: {
        "Content-type": "application/json",
      },
    });
  },
};
