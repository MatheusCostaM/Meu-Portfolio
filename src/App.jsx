import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ERPProject from './pages/ERPProject';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ERPProject" element={<ERPProject />} />
      </Routes>
    </Router>
  );
};

export default App;

