
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div >
      <nav>
        <Link to="/" className="title">
          <i className="fa-brands fa-leanpub fa-bounce">SkillBoost</i>
        </Link>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <i className="fa-solid fa-ellipsis fa-lg"></i>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <Link to="/">Home</Link>  
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>     
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
