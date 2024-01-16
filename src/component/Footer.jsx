import React from "react";
import "../styles/Footer.css";

import { Link } from "react-router-dom";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <p variant="h5"> About Me</p>

     
        <p>Hey,My Name is Prathmesh Bidve ,I am FullStack Developer.</p>
        {/* <Link to="/Home" className="footerContact">
        <p  ><Link to="mailto:bidveprathmesh590@gmail.com">Contact Me</Link></p>

        </Link> */}
        <div className="button2">
          <button className="btn-hov color-6">
            <Link to="mailto:bidveprathmesh590@gmail.com">Contact Me</Link>
          </button>
        </div>
      </div>
      <div className="Link">
        <p variant="h6"> Social Media</p>
        <a
          href="http://github.com/prathmesh0125"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub />
        </a>
        <a
          href="https://www.instagram.com/prathmesh_bidve_03"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/prathmesh-bidve-4658b5253/" target="_blank" rel="noopener noreferrer">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
