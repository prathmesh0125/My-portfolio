import React from 'react'
import "../styles/Project.css";
import{   BsGithub} from "react-icons/bs"; 
import { Link } from 'react-router-dom';

const Project = () => {
  const projectWork = [
    {
      id: 1,
      src: "Project/Barebeat.png",
      alt: "loading",
      name: "Music Palyer",
      description:"Designed a captivating UI in HTML and CSS, featuring album art and intuitive playback controls. Implemented real-time audio playback in React, ensuring seamless user experience with modular components for efficient state management.",
      techstack:"#Reactjs #javascript #css #html ",
      github:"https://github.com/prathmesh0125/Music_player",
      link:"https://barebeat-player.netlify.app/"


    },
    {
      id: 2,
      src: "Project/Top_Headline.png",
      alt: "loading",
      name: "Top-Headline",
      description:" developed a responsive news web application leveraging the capabilities of React.js and integrating real-time news updates through the News API, offering users a modern and interactive platform to stay informed.",
      techstack:" #css #html ",
      github:"https://github.com/prathmesh0125/Top-Headline.github.io",
      link:"https://github.com/prathmesh0125/Top-Headline.github.io"

    },
    {
      id: 3,
      src: "Project/Text_analyzer.png",
      alt: "loading",
      name: "Text-Analyzer",
      description:"I engineered a text analyzer application using React.js, enabling users to analyze and interpret textual content efficiently, providing valuable insights and enhancing user engagement with a dynamic and user-friendly interface",
      techstack:"#Reactjs #javascript #css #html ",
      github:"https://github.com/prathmesh0125/Text-Analyzer",
      link:"https://prathmesh0125.github.io/Text-Analyzer/"



    },
    {
      id: 4,
      src: "Project/weather.png",
      alt: "loading",
      name: "Weather app",
      description:"Enhanced visual appeal with custom CSS and Bootstrap in a user-friendly interface. Leveraged API-Ninjas for real-time weather updates, integrating JavaScript for seamless, responsive user interactions",
      techstack:"#javascript #css #html ",
      github:"https://github.com/prathmesh0125/WeatherInfo.github.io",
      link:" https://prathmesh0125.github.io/WeatherInfo.github.io/",
     
    },
    {
      id: 5,
      src: "Project/study.png",
      alt: "loading",
      name: "Study Sync",
      description:"Crafted a StudySync website with HTML and CSS, harmonizing content and style for an engaging educational platform, Seamless design meets functionality, providing an immersive study experience",
      techstack:" #css #html ",
      github:"https://github.com/prathmesh0125/Studysync",
      link:"https://studysynce.netlify.app/"


    },
  
    {
      id: 6,
      src: "Project/Blog website.png",
      alt: "loading",
      name: "Blog Websie",
      description:"I crafted a dynamic blog website using the power of HTML and CSS, seamlessly blending aesthetic design with structured content for an engaging user experience",
      techstack:" #css #html ",
      github:"https://github.com/prathmesh0125/Blogs_project",
      link:"https://myblogs1.netlify.app/"
    },
  ];
  return (
    <div>
      <div className="Projectcontainer">
        <h1>Project</h1>
        <div
          className= "project_card_container"
          // style={{ boxShadow: " 0px 16px 47px 15px black" }}
        >
          {projectWork.map(({ id, src, alt, name,description,techstack,github,link }) => (
            <div
              key={id}
              className="Project_card"
              // style={{ boxShadow: " 0px 0px 15px 3px white" }}
            >
              <img src={src} alt={alt} />
              <p>{name}</p>
              <p>{description}</p>
              <p>{techstack}</p>
              <div className='project_link'>
              
              <Link to={github} style={{color:"white"}}><BsGithub/></Link>
                  
              <Link to={link} style={{color:"white"}}>Demo</Link>
              </div>
            </div>
          ))}

       
        </div>
      </div>
    </div>
  );
}

export default Project
