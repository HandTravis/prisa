// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from './scripts/Home';
import About from './scripts/About';
import Contact from './scripts/Contact';
import Sales from './scripts/Sales';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>Welcome to My Website</h1>
        </header>
        <div className="sidenav">
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/sales">Sales</Link></li>
            </ul>
          </nav>
      </div>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sales" element={<Sales />} />
          </Routes>
        </main>
        <footer>
          <p>&copy; Fill in later!</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
