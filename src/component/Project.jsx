import React from 'react'
import "../styles/Project.css";
import{   BsGithub} from "react-icons/bs"; 
import { Link } from 'react-router-dom';

const Project = () => {
  const projectWork = [
    {
      id: 1,
      src: "project/Barebeat.png",
      alt: "loading",
      name: "Music Palyer",
      description:"Designed a captivating UI in HTML and CSS, featuring album art and intuitive playback controls. Implemented real-time audio playback in React, ensuring seamless user experience with modular components for efficient state management.",
      techstack:"#Reactjs #javascript #css #html ",
      github:<BsGithub/>,
      link:"https://github.com/prathmesh0125/Music_player"


    },
    {
      id: 2,
      src: "project/weather.png",
      alt: "loading",
      name: "Weather app",
      description:"Enhanced visual appeal with custom CSS and Bootstrap in a user-friendly interface. Leveraged API-Ninjas for real-time weather updates, integrating JavaScript for seamless, responsive user interactions",
      techstack:"#javascript #css #html ",
      github:<BsGithub/>,
      link:"https://github.com/prathmesh0125/WeatherInfo.github.io",

    },
    {
      id: 3,
      src: "project/Top_Headline.png",
      alt: "loading",
      name: "Top-Headline",
      description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores dolorum asperiores architecto animi dignissimos fuga saepe debitis deserunt. Quos natus dolores id dolorem ab nisi recusandae laborum illo, cum molestias?",
      techstack:" #css #html ",
      github:<BsGithub/>,
      link:"https://github.com/prathmesh0125/Top-Headline.github.io"

    },
    {
      id: 4,
      src: "project/Text_analyzer.png",
      alt: "loading",
      name: "Text-Analyzer",
      description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores dolorum asperiores architecto animi dignissimos fuga saepe debitis deserunt. Quos natus dolores id dolorem ab nisi recusandae laborum illo, cum molestias?",
      techstack:"#Reactjs #javascript #bootstrap #css #html ",
      github:<BsGithub/>,
      link:"https://github.com/prathmesh0125/Text-Analyzer"



    },
    {
      id: 5,
      src: "project/Education.png",
      alt: "loading",
      name: "Study Sync",
      description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores dolorum asperiores architecto animi dignissimos fuga saepe debitis deserunt. Quos natus dolores id dolorem ab nisi recusandae laborum illo, cum molestias?",
      techstack:" #css #html ",
      github:<BsGithub/>,
      link:"https://github.com/prathmesh0125/Studysync"


    },
    {
      id: 6,
      src: "project/Education.png",
      alt: "loading",
      name: "Blog Websie",
      description:"Enhanced visual appeal with custom CSS and Bootstrap in a user-friendly interface. Leveraged API-Ninjas for real-time weather updates, integrating JavaScript for seamless, responsive user interactions",
      techstack:"  #html #css #javascript ",
      github:<BsGithub/>,
      link:" "

    },
    {
      id: 7,
      src: "project/Blog website.png",
      alt: "loading",
      name: "Blog Websie",
      description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores dolorum asperiores architecto animi dignissimos fuga saepe debitis deserunt. Quos natus dolores id dolorem ab nisi recusandae laborum illo, cum molestias?",
      techstack:" #css #html ",
      github:<BsGithub/>,
      link:"https://github.com/prathmesh0125/Blogs_project"


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
              
              <Link to={link} style={{color:"white"}}>{github}</Link>
                  
              <Link to="" style={{color:"white"}}>Demo</Link>
              </div>
            </div>
          ))}

       
        </div>
      </div>
    </div>
  );
}

export default Project
