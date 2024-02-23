// App.js
import React, { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import axios from "axios";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get("/api/tasks"); // Assuming your backend server is running on the same host
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const addTask = async (title) => {
    try {
      const response = await axios.post("/api/tasks", {
        title,
        id: Math.random(),
      });
      setTasks([...tasks, response.data]);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`/api/tasks/${id}`);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const editTask = async (id, title) => {
    try {
      await axios.put(`/api/tasks/${id}`, { title, id });
      setTasks(
        tasks.map((task) => (task.id === id ? { ...task, title } : task))
      );
    } catch (error) {
      console.log(error);
      console.error("Error editing task:", error);
    }
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h3" align="center" gutterBottom>
        Task Management Application
      </Typography>
      <TaskForm onSubmit={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onEdit={editTask} />
    </Container>
  );
};

export default App;
