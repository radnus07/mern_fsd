// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/academics">Academics</Link></li>
        <li><Link to="/placements">Placements</Link></li>
        <li><Link to="/fee">Fee</Link></li>
        <li><Link to="/helpdesk">Helpdesk</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
