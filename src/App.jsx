import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header'
import Footer from './components/Footer'
import Projects from '../src/pages/Projects'
import Skills from '../src/pages/Skills'
import Contact from '../src/pages/Contact'
import Home from './pages/Home';
const App = () => {
  return (
    <Router>
      <Header /> {/* Add the Header component here */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact-me" element={<Contact />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
};

export default App;
