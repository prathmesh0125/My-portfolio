import React from "react";
import "../styles/testimonial.css";

const Testimonial = () => {
  const Testimonials = [
  
    {
      id: 1,
      Text:"Your commitment to refining your coding skills and tackling challenging problems is truly commendable  ",
      personname: "Mohit Khandelwal",
      post: "Lead consultant at Genpact",
      img:"tech/profile.png",
    },
    {
      id: 2,
      Text:"Prathmesh's passion for learning and mastering frontend tech marks him a valuable asset.his  imppresive skills and dedication shine in exceptional frontend work  ",
      personname: "Sumit moni",
      post: "Full stack developer",
      img:"tech/profile.png",
    },
    {
      id: 1,
      Text:"Prathmesh's passion for learning and mastering frontend tech marks him a valuable asset.his  imppresive skills and dedication shine in exceptional frontend work ",
      personname: "Abhishek Saware",
      post: "SDE @EnergyExemplar",
      img:"tech/profile.png",
    },
    
  ];
  return (
    <div class="testimonial-container">
      <div class="testmonial-content">
        <h2 class="Test-Title">What Others Say About Me</h2>
        <div class="testimonial-grid">
            {Testimonials.map(({id,Text,personname,post,img})=> (
          <div class="testimonial-card" key={id}>
              <div class="testimnial-text">
              {Text}
              </div>
              <div class="textimonial-avtar">
                <img src={img} alt="" />
              </div>
              <div class="textimonial-deatils">
                <h3>{personname}</h3>
                <p>{post}</p>
              </div>
            </div>
            ))}
            
          {/* <div class="testimonial-card">
            <div class="testimnial-text">
              "study-sync Revolutionized my classroom Engaging content and
              teacher resources make learning Enjoyable highly recommended for
              educators"
            </div>
            <div class="textimonial-avtar">
              <img src="tech/profile.png" alt="" />
            </div>
            <div class="textimonial-deatils">
              <h3>Sumit moni</h3>
              <p>Full stack developer</p>
            </div>
          </div>
          <div class="testimonial-card">
            <div class="testimnial-text">
              "study-sync Revolutionized my classroom Engaging content and
              teacher resources make learning Enjoyable highly recommended for
              educators"
            </div>
            <div class="textimonial-avtar">
              <img src="tech/tailwind.png" alt="" />
            </div>
            <div class="textimonial-deatils">
              <h3>James Carter</h3>
              <p>Scool Administrator</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
