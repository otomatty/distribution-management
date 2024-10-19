import React from "react";
import { Checkbox } from "@/components/ui/checkbox";

interface Task {
  id: string;
  title: string;
  completed: boolean;
  dueDate: string;
}

interface TaskListProps {
  tasks: Task[];
}

export const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4">タスク</h2>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center">
            <Checkbox id={task.id} checked={task.completed} />
            <label
              htmlFor={task.id}
              className={`ml-2 text-sm ${
                task.completed ? "line-through text-gray-500" : "text-gray-800"
              }`}
            >
              {task.title}
            </label>
            <span className="ml-auto text-xs text-gray-500">
              {task.dueDate}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
