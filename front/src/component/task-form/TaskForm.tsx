import React from "react";
import { useState, useEffect } from "react";
import "./index.css";

interface TaskFormProps {
  onSubmit: (title: string) => void;
  initialTitle?: string;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, initialTitle = "" }) => {
  const [title, setTitle] = useState(initialTitle);

  useEffect(() => {
    setTitle(initialTitle);
  }, [initialTitle]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onSubmit(title);
      setTitle("");
    }
  };

  return (
    <div className="task-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="Створіть список..."
        />
        <button type="submit">{initialTitle ? "Зберегти" : "Сворити"}</button>
      </form>
    </div>
  );
};

export default TaskForm;
