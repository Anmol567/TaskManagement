// TaskList.js
import React from "react";
import { List } from "@mui/material";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDelete, onEdit }) => {
  return (
    <List>
      {tasks.map((task, index) => (
        <>
          <TaskItem
            key={task.id}
            task={task}
            onDelete={onDelete}
            onEdit={onEdit}
            index={index + 1}
          />
          <div style={{ border: "0.5px solid gray" }}></div>
        </>
      ))}
    </List>
  );
};

export default TaskList;
