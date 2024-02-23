// TaskItem.js
import React, { useState } from "react";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CancelIcon from "@mui/icons-material/Cancel";
import SaveIcon from "@mui/icons-material/Save";

const TaskItem = ({ task, onDelete, onEdit, index }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(task.id, editedTitle);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedTitle(task.title);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSave();
    }
  };

  return (
    <ListItem>
      {isEditing ? (
        <>
          <div
            style={{
              marginRight: "10px",
              fontSize: "larger",
            }}
          >
            {index}.
          </div>
          <div style={{ width: "500px" }}>
            <TextField
              autoFocus
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              onKeyDown={handleKeyDown}
              fullWidth
            />
          </div>
          <IconButton aria-label="save" onClick={handleSave}>
            <SaveIcon />
          </IconButton>
          <IconButton aria-label="cancel" onClick={handleCancel}>
            <CancelIcon />
          </IconButton>
        </>
      ) : (
        <>
          <div
            style={{
              marginRight: "10px",
              fontSize: "larger",
            }}
          >
            {index}.
          </div>
          <ListItemText primary={task.title} />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="edit" onClick={handleEdit}>
              <EditIcon />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => onDelete(task.id)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
};

export default TaskItem;
