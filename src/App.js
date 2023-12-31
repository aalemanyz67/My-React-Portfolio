// Import necessary React libraries and components
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header.js";
import About from './components/About.js';
import Portfolio from './components/Portfolio.js';
import Contact from './components/Contact.js';
import Resume from './components/Resume.js';
import Footer from './components/Footer.js';

// Import Bootstrap and custom CSS styles
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/App.css";
// Define the App component
function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        {/* <Navigation /> */}
        {/* <Header/> */}
        <div className="container mt-5">
          <Routes>
            <Route path="/My-React-Portfolio/" element={<About />} />
            {/* <Route path="/My-React-Portfolio/home" element={<Home />} /> */}
            <Route path="/My-React-Portfolio/about" element={<About />} />
            <Route path="/My-React-Portfolio/portfolio" element={<Portfolio />} />
            <Route path="/My-React-Portfolio/contact" element={<Contact />} />
            <Route path="/My-React-Portfolio/resume" element={<Resume />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}
// Render the Footer component
export default App;