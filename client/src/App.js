import React from "react";
import './App.css';
import Home from './pages/Home';
import CreateTask from './pages/CreateTask';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/createTask">Add New Task</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createTask" element={<CreateTask />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
