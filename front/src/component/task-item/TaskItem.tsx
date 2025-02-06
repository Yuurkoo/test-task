import React, { useState } from "react";
import Tasks from "../../page/tasks/Tasks";
import "./index.css";

interface TaskProps {
  task: { id: string; title: string };
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskItem: React.FC<TaskProps> = ({ task, onEdit, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="task-item">
      <div className="task-item-content">
        <button className="task-item-title" onClick={() => setIsOpen(!isOpen)}>
          cписок: {task.title}
        </button>
        <div className="task-item-btn-container">
          <button onClick={() => onEdit(task.id)}>Змінити</button>
          <button onClick={() => onDelete(task.id)}>Видалити</button>
        </div>
      </div>
      {isOpen && (
        <div className="task-details">
          <Tasks />
        </div>
      )}
    </div>
  );
};

export default TaskItem;
