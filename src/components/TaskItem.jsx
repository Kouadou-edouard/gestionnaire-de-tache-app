import React from 'react';
import { Link } from 'react-router-dom';

const TaskItem = ({ task, toggleComplete, deleteTask }) => {
  return (
    <li className="task-item">
      <span>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
        />
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.title}
        </span>
      </span>
      <div>
        <Link to={`/edit-task/${task.id}`} className="button edit-button">Modifier</Link>
        <button className="button delete-button" onClick={() => deleteTask(task.id)}>Supprimer</button>
      </div>
    </li>
  );
};

export default TaskItem;
