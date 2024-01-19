import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaCode, FaTimes } from "react-icons/fa";
import "../styles/nav.css";

const Navbar = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const closeMenu = () => {
    setIsChecked(false);
  };

  return (
    <div>
      <nav>
        <div className="logo">
        {/* <a href="#logo" class="logo"> */}
          <i><FaCode /></i>
          <span className="logo-text">Portfolio</span>
        {/* </a> */}
          
          {/* <i><FaCode /></i>Portfolio */}
          </div>
        <input type="checkbox" id="click" checked={isChecked} onChange={handleCheckboxChange} />
        <label htmlFor="click" className="menu-btn">
          {isChecked ? <i><FaTimes /></i> : <i><FaBars /></i>}
        </label>
        <ul>
          <li>
            <Link className="active" to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/Project" onClick={closeMenu}>
              Project
            </Link>
          </li>
        
          <li>
            <Link to="/About" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link className="contact" to="/Contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
