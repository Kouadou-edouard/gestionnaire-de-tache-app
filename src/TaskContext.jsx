import React, { createContext, useState } from 'react';

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'IMAT', completed: false },
    { id: 2, title: 'IUA', completed: false },
    { id: 3, title: 'UPB', completed: false },
    { id: 4, title: 'UICI', completed: false }
  ]);

  const addTask = (title) => {
    const newTask = { id: tasks.length + 1, title, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const editTask = (taskId, newTitle) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, title: newTitle } : task
    ));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleComplete, deleteTask, editTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskProvider };
