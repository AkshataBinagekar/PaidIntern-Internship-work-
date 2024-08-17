import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import Course from './Pages/Course.jsx';
import CourseDetail from './Pages/CourseDetail.jsx';
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Course />} />
          <Route path="/course/:id" element={<CourseDetail />} /> 
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
