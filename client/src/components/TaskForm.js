// TaskForm.js
import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const TaskForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onSubmit(title);
    setTitle("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "500px", marginRight: "10px" }}>
        <TextField
          label="Task"
          fullWidth
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <Button type="submit" variant="contained" color="primary">
        Add Task
      </Button>
    </form>
  );
};

export default TaskForm;
