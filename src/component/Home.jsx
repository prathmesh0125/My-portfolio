import React, { useEffect, useState } from "react";
import "../styles/home.css";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import Skill from "./Skill";
import Coding from "./Coding";
import Project from "./Project";
import Typewriter from "typewriter-effect";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import gsap from "gsap";
import Circle from "./Circle";
import Testimonial from "./Testimonial";
import Certificate from "./Certificate";

const Home = () => {
  const CursorEffect = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [cursorStyle, setCursorStyle] = useState({ scale: 0, opacity: 0 });

    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
      setCursorStyle({ scale: 1, opacity: 1 });
    };

    const handleMouseLeave = () => {
      setCursorStyle({ scale: 0, opacity: 0 });
    };

    useEffect(() => {
      const page1 = document.querySelector(".Home");

      if (page1) {
        page1.addEventListener("mousemove", handleMouseMove);
        page1.addEventListener("mouseenter", handleMouseEnter);
        page1.addEventListener("mouseleave", handleMouseLeave);
      }

      return () => {
        // Clean up the event listeners on component unmount
        if (page1) {
          page1.removeEventListener("mousemove", handleMouseMove);
          page1.removeEventListener("mouseenter", handleMouseEnter);
          page1.removeEventListener("mouseleave", handleMouseLeave);
        }
      };
    }, []); // Empty dependency array ensures that the effect runs only once on mount

    useEffect(() => {
      // Use gsap.to with cursorStyle values
      gsap.to("#cursor", {
        x: cursorPosition.x,
        y: cursorPosition.y,
        scale: cursorStyle.scale,
        opacity: cursorStyle.opacity,
      });
    }, [cursorPosition, cursorStyle]);
  };

  return (
    <div className="Home">
      <div id="main">
        <div className="back"></div>
        <div className="top">
          <div className="workarea">
            <div id="cursor">
              {CursorEffect()}
              {/* <h5>explore</h5> */}
            </div>
            {/* <Navbar/> */}
            <div className="hero">
              <div className="heroleft">
                <div className="elem">
                  <h1>
                    {" "}
                    Hi ,I Am
                    <br />
                    <br />
                    <span className="span">P</span>rathmesh{" "}
                    <span className="span">B</span>idve
                  </h1>
                  <h1 className="typewriter">
                    <Typewriter
                      options={{
                        strings: [
                          "A MERN Developer",
                          "A React Developer",
                          "A Mentor",
                        ],
                        autoStart: true,
                        loop: true,
                        wrapperClassName: "typewriterpara",
                      }}
                    />
                  </h1>
                  {/* <h1>Mentor</h1> */}
                  <div className="sociallink">
                    <h3>Connect Me:</h3>
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
                  <div className="Homebutton">
                    <button className="btn-Home color-1">
                      <Link to="mailto:bidveprathmesh590@gmail.com">
                        Contact Me
                      </Link>
                    </button>
                    <button className="btn-Home color-2">
                      <Link to="/Project">
                        Projects{" "}
                        <span>
                          <FaExternalLinkAlt />
                        </span>
                      </Link>
                    </button>
                  </div>
                </div>

                {/* <button>Contact Me</button> */}
              </div>
              <div className="heroright">
                {/* <p>Lorem ipsum dolor sit amet.</p>

                
                <div className="img">
                </div>
                <p>
                  I'm a dedicated developer with a passion for crafting
                  innovative software solutions that solve real-world problems
                </p> */}
                <Circle />
                <p>
                  My portfolio showcases my journey in the world of technology,
                  highlighting my skills and commitment to excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* <Portfolio/> */}
        <Project />
      </div>
      {/* <Projectswapper/> */}

      <Skill />
      <Testimonial />
      {/* <MySwapper/> */}
      <Certificate />
      <Coding />
    </div>
  );
};

export default Home;
