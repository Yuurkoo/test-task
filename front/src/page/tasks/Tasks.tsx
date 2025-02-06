import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./index.css";

interface Task {
  id: string;
  title: string;
  description: string;
}

const TaskForm: React.FC<{
  onSubmit: (title: string, description: string) => void;
  initialTitle?: string;
  initialDescription?: string;
  onCancel?: () => void;
}> = ({ onSubmit, initialTitle = "", initialDescription = "", onCancel }) => {
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onSubmit(title, description);
      setTitle("");
      setDescription("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-tasks-add">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Назва завдання"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Опис завдання"
      />
      <button type="submit" className="task-add">
        {initialTitle ? "Зберегти" : "Додати"}
      </button>
      {onCancel && (
        <button type="button" onClick={onCancel} className="task-cancel">
          Скасувати
        </button>
      )}
    </form>
  );
};

const Tasks: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const addTask = (title: string, description: string) => {
    const newTask = { id: Date.now().toString(), title, description };
    setTasks([...tasks, newTask]);
  };

  const startEditing = (task: Task) => {
    setEditingTask(task);
  };

  const editTask = (title: string, description: string) => {
    if (editingTask) {
      setTasks(
        tasks.map((task) =>
          task.id === editingTask.id ? { ...task, title, description } : task
        )
      );
      setEditingTask(null);
    }
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="tasks">
      <h2>Завдання для списку {id}</h2>
      <TaskForm onSubmit={addTask} />
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="task-li">
            <div className="added-task" onClick={() => startEditing(task)}>
              <strong>{task.title}: </strong> {task.description}
            </div>
            {editingTask?.id === task.id && (
              <TaskForm
                onSubmit={(title, description) => editTask(title, description)}
                initialTitle={editingTask.title}
                initialDescription={editingTask.description}
                onCancel={() => setEditingTask(null)}
              />
            )}
            <div className="task-del-btn-container">
              <button
                className="task-del-btn"
                onClick={() => deleteTask(task.id)}
              >
                Видалити
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
