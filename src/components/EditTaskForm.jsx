import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TaskContext } from '../TaskContext';

const EditTaskForm = () => {
  const { tasks, editTask } = useContext(TaskContext);
  const { taskId } = useParams();
  const navigate = useNavigate();
  
  const taskToEdit = tasks.find(task => task.id === parseInt(taskId, 10));
  
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
    } else {
      navigate('/');
    }
  }, [taskToEdit, navigate]);

  useEffect(() => {
    console.log('Task to edit:', taskToEdit); // Log pour vérifier les données
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTask(parseInt(taskId, 10), title);
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
          rows="4"
          className="task-input"
          style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
        />
      </div>
      <button type="submit" className="button edit-button">Modifier</button>
    </form>
  );
};

export default EditTaskForm;
