import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TaskContext } from '../TaskContext';

const AddTaskForm = () => {
  const [title, setTitle] = useState('');
  const { addTask } = useContext(TaskContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(title);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="taskTitle"></label>
        <textarea
          id="taskTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          rows="4" // Définit le nombre de lignes visibles
          className="task-input"
        />
      </div>
      <button type="submit" className="button create-button">Créer</button>
    </form>
  );
};

export default AddTaskForm;
