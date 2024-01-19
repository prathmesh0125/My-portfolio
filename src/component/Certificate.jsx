import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/certificate.css";

// import "./styles/certificate.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  const certificate = [
    {
      id: "c1",
      img: "tech/git.jpg",
      certificate: "Git",
      institute: "Udemy",
    },
    {
      id: "c2",
      img: "tech/javascript.jpg",
      certificate: "javascript",
      institute: "Udemy",
    },
  
  ];
    const breakpoints = {
      // Define breakpoints for different screen sizes
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      1000: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
    };
  return (
    <>
    <h2 id="certificate" class="Test-Title">Certification</h2>

      <Swiper
        className="course_container"
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          // clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={breakpoints}
        // className="mySwiper"
      >
        {certificate.map(({ id, img, certificate, institute }) => (
          <SwiperSlide>
            <div className="course" key={id}>
              <img src={img} alt="" />
              <p className="course_name">{certificate}</p>
              <p className="course_institute">{institute}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
