import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TaskProvider } from './TaskContext';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import EditTaskForm from './components/EditTaskForm';
import './App.css'; // Assurez-vous d'avoir votre fichier CSS pour les styles de base

const App = () => {
  return (
    <TaskProvider>
      <Router>
      <motion.div
          className="App"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
        >
        <div className="App">
          <header>
            <h1>Gestionnaire de tâche</h1>
          </header>
          
            <Routes>
              <Route path="/" element={<TaskList />} />
              <Route path="/add-task" element={<AddTaskForm />} />
              <Route path="/edit-task/:taskId" element={<EditTaskForm />} />
            </Routes>
          
        </div>
        </motion.div>
      </Router>
    </TaskProvider>
  );
};

export default App;
