import React from "react";
import './App.css';
import Home from './pages/Home';
import OrderForm from './pages/OrderForm';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="order">
        <Link to="/order-form">Order</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order-form" element={<OrderForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
