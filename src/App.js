import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard'; // Adjust the import path based on your project structure

const App = () => (
  <Router>
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<LoginForm />} />
    </Routes>
  </Router>
);

export default App;
