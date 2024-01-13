import React from "react";
import "../styles/about.css";
const About = () => {
  return (
    <div className="about">
      <div className="aboutcontainer1">
        <p>Hey,My Name is Prathmesh Bidve, I am FullStack Developer.</p>
      </div>
      <div className="aboutcontainer2">
        <div>
          <img src="tech/profile.png" alt="" />
          <p style={{ margin:"1vmax 0",fontSize:"24px", color: "hsl(42.06deg 90.45% 52.07%)", paddingTop: "5vmax" }}>
            Prathmesh Bidve
          </p>
          <p>A Fullstack Developer</p>
          <p style={{ margin: "1vmax 0" }}>A Mentor</p>
        </div>
        <div>
          <p variant="h3" style={{ paddingTop: "5vmax" }}>
            {" "}
            I'm a dedicated developer with a passion for crafting innovative
            software solutions that solve real-world problems.{" "}
          </p>
          <p variant="h3" style={{ paddingTop: "3vmax" }}>
            {" "}
            My portfolio showcases my journey in the world of technology,
            highlighting my skills and commitment to excellence.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
