import React from "react";
import TaskList from "../../component/task-list/TaskList";
import TaskForm from "../../component/task-form/TaskForm";
import { useState } from "react";
import "./index.css";

interface Task {
  id: string;
  title: string;
}

const TaskContainer: React.FC<Task> = ({ id, title }) => {
  const [tasks, setTask] = useState<Task[]>([]);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const addTask = (title: string) => {
    const newTask = { id: Date.now().toString(), title };
    setTask([...tasks, newTask]);
  };

  const deleteTask = (id: string) => {
    setTask(tasks.filter((task) => task.id !== id));
  };

  const startEditing = (id: string) => {
    const taskToEdit = tasks.find((task) => task.id === id);

    if (taskToEdit) {
      setEditingTask(taskToEdit);
    }
  };

  const editTask = (title: string) => {
    if (editingTask) {
      setTask(
        tasks.map((task) =>
          task.id === editingTask.id ? { ...task, title: title } : task
        )
      );
      setEditingTask(null);
    }
  };

  return (
    <div className="task-container">
      <h2>TO DO LIST</h2>
      <TaskForm
        onSubmit={editingTask ? editTask : addTask}
        initialTitle={editingTask?.title}
      />
      <TaskList tasks={tasks} onEdit={startEditing} onDelete={deleteTask} />
    </div>
  );
};

export default TaskContainer;
