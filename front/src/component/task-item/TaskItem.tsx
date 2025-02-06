import React from "react";
import "./index.css";

interface TaskProps {
  task: { id: string; title: string };
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskItem: React.FC<TaskProps> = ({ task, onEdit, onDelete }) => {
  return (
    <div className="task-item">
      <div className="task-item-content">
        <div className="task-item-title">
          <span>{task.title}</span>
        </div>

        <div className="task-item-btn-container">
          <button
            onClick={() => {
              onEdit(task.id);
            }}
          >
            Змінити
          </button>
          <button
            onClick={() => {
              onDelete(task.id);
            }}
          >
            Видалити
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
