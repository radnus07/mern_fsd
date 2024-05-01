// MainPage.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Academics from './Academics';
import Fee from './Fee';
import Feedback from './Feedback';
import Header from './Header';
import HelpDesk from './HelpDesk';
import Home from './Home';
import './MainPage.css';
import Placements from './Placements';
import Settings from './Settings';


function MainPage() {
  return (<>
      <div className="MainPage">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/fee" element={<Fee />} />
          <Route path="/helpdesk" element={<HelpDesk />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
      </>
  );
}

export default MainPage;
