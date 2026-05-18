import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Features from './pages/Features';
import Target from './pages/Target';
import About from './pages/About';
import Investors from './pages/Investors';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/target" element={<Target />} />
          <Route path="/about" element={<About />} />
          <Route path="/investors" element={<Investors />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
