// Header.js
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo  from '../../assets/logo-colored.svg';

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const [currentTab, setCurrentTab] = useState(getCurrentTabName());

  function getCurrentTabName() {
    const path = location.pathname;
    switch (path) {
      case '/academics':
        return 'Academics';
      case '/placements':
        return 'Placements';
      case '/fee':
        return 'Fee';
      case '/helpdesk':
        return 'Help Desk';
      case '/course-registration':
        return 'Course Registration';
      case '/feedback':
        return 'Feedback';
      case '/settings':
        return 'Settings';
      case '/login':
        return 'Sign Out';

      default:
        return 'Home';
    }
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleTabClick = () => {
    setSidebarOpen(false);
  };

  useEffect(() => {
    setCurrentTab(getCurrentTabName());
  }, [location]);

  return (
    <header className="header">
      <nav>
        <div className="menu-icon" onClick={toggleSidebar}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-menu"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
          <p>{currentTab}</p>
        </div>
        <ul className={sidebarOpen ? "nav-list active" : "nav-list"}>
        <li className="amlogo"><Link to="/"><img src={logo} alt="Website Icon" /></Link></li>
        <h3 className="headertitle">Student Portal</h3>
          <li><Link to="/home" className="header-button" onClick={handleTabClick}>Home</Link></li>
          <li><Link to="/academics" className="header-button" onClick={handleTabClick}>Academics</Link></li>
          <li><Link to="/placements" className="header-button" onClick={handleTabClick}>Placements</Link></li>
          <li><Link to="/fee" className="header-button" onClick={handleTabClick}>Fee</Link></li>
          <li><Link to="/helpdesk" className="header-button" onClick={handleTabClick}>Help Desk</Link></li>
          <li><Link to="/feedback" className="header-button-phn" onClick={handleTabClick}>Feedback</Link></li>
          <li><Link to="/settings" className="header-button-phn" onClick={handleTabClick}>Settings</Link></li>
          <li className="dropdown">
            <button className="dropbtn">More</button>
            <div className="dropdown-content">
              <Link to="/feedback" className="header-button" onClick={handleTabClick}>Feedback</Link>
              <Link to="/settings" className="header-button" onClick={handleTabClick}>Settings</Link>
            </div>
          </li>
          
          <li><Link to="/login" className="header-button" onClick={handleTabClick}>Sign Out</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
