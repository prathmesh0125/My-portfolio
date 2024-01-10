import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Swiper, Pagination, Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "../styles/myswapper.css";

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import{   BsGithub} from "react-icons/bs"; 
import { Link } from 'react-router-dom';
export default function App() {
  const projectWork = [
    {
      id: 1,
      src: "project/Barebeat.png",
      alt: "loading",
      name: "Music Palyer",
      description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores dolorum asperiores architecto animi dignissimos fuga saepe debitis deserunt. Quos natus dolores id dolorem ab nisi recusandae laborum illo, cum molestias?",
      techstack:"#Reactjs #javascript #css #html ",
      github:<BsGithub/>

    },
    {
      id: 2,
      src: "project/Education.png",
      alt: "loading",
      name: "Education",
      description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores dolorum asperiores architecto animi dignissimos fuga saepe debitis deserunt. Quos natus dolores id dolorem ab nisi recusandae laborum illo, cum molestias?",
      techstack:"#Reactjs #javascript #css #html ",
      github:<BsGithub/>

    },
    {
      id: 3,
      src: "project/Top_Headline.png",
      alt: "loading",
      name: "Top-Headline",
      description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores dolorum asperiores architecto animi dignissimos fuga saepe debitis deserunt. Quos natus dolores id dolorem ab nisi recusandae laborum illo, cum molestias?",
      techstack:" #css #html ",
      github:<BsGithub/>

    },
    {
      id: 4,
      src: "project/Text_analyzer.png",
      alt: "loading",
      name: "Text-Analyzer",
      description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores dolorum asperiores architecto animi dignissimos fuga saepe debitis deserunt. Quos natus dolores id dolorem ab nisi recusandae laborum illo, cum molestias?",
      techstack:"#Reactjs #javascript #bootstrap #css #html ",
      github:<BsGithub/>

    },
    {
      id: 5,
      src: "project/Blog website.png",
      alt: "loading",
      name: "Blog Websie",
      description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores dolorum asperiores architecto animi dignissimos fuga saepe debitis deserunt. Quos natus dolores id dolorem ab nisi recusandae laborum illo, cum molestias?",
      techstack:" #css #html ",
      github:<BsGithub/>

    },
    
  ];
  return (
    <>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          // clickable: false,
        }}
        autoplay={{
          delay: 1000, // Set the delay between slides (in milliseconds)
          disableOnInteraction: false, // Autoplay will not be disabled after user interactions (like click on the slider)
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <h1 className='swpaper_title'>Projects</h1>
        <div className="swapper-container">

          {projectWork.map(({ id, src, alt, name,description,techstack,github }) => (
            <SwiperSlide>
            <div
              key={src}
              className="Swipper_Project_card"
              // style={{ boxShadow: " 0px 0px 15px 3px white" }}
            >

              <img src={src} alt={alt} />
              <div className="project-content">
              <p className='title'>{name}</p>
              <p className='desc' >{description}</p>
              <p className='desc'>{techstack}</p>
              <div className='project_link'>
              
              <Link to="" style={{color:"white"}}>{github}</Link>
                  
              <Link to="" style={{color:"white"}}>Demo</Link>
              </div>

              </div>
            </div>
        </SwiperSlide>

          ))}
        </div>
      </Swiper>
    </>
  );
}
