import React from "react";
import { Link } from "react-router-dom";
import '../styles/nav.css';
import { BsMenuApp } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">Prathmesh</div>
        <input type="checkbox" id="click" />
        <label htmlFor="click" className="menu-btn">
          <i><FaBars/></i>
        </label>
        <ul>
        {/* <Link to="/Home" className="footerContact"> */}

          <li>
            <Link className="active" to="/">
              Home
            </Link>
          </li>
          <li>
            {/* <a href="/_Project/NavBar/About.html">About</a> */}
          </li>
          <li>
            <Link to="/Project">Project</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link className="contact" to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
