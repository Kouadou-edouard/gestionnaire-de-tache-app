import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TaskContext } from '../TaskContext';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { tasks, toggleComplete, deleteTask } = useContext(TaskContext);

  return (
    <div>
      <div className="add-task-button">
        <Link to="/add-task" className="button add-button">Ajouter une tâche</Link>
      </div>
      <ul className="task-list">
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
