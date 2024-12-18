import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import LandingPage from './ARLandingPage';
import './index.css';

ReactDOM.render(
  <Router basename="/ar_portfolio">
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/portfolio" element={<App />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
