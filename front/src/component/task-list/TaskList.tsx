import React from "react";
import TaskItem from "../task-item/TaskItem";
import "./index.css";

interface TaskListProps {
  tasks: { id: string; title: string }[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onEdit, onDelete }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
        ></TaskItem>
      ))}
    </div>
  );
};

export default TaskList;
