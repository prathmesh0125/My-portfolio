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
      href:"https://www.linkedin.com/in/mohitkh7/"

    },
    {
      id: 2,
      Text:"Prathmesh's passion for learning and mastering frontend tech marks him a valuable asset.his  imppresive skills and dedication shine in exceptional frontend work  ",
      personname: "Sumit moni",
      post: "Full stack developer",
      img:"tech/sumit sir.jpg",
      href:"https://www.linkedin.com/in/sumitsoni0226/"
    },
    {
      id: 1,
      Text:"Prathmesh is a frontend development standout, demonstrating dedication, passion, and adept problem-solving. His commitment to continuous improvement makes him a pleasure to mentor. ",
      personname: "Abhishek Saware",
      post: "SDE @EnergyExemplar",
      img:"tech/profile.png",
      href:"https://www.linkedin.com/in/abhishek-saware-515112193/"


    },
    
  ];
  return (
    <div className="testimonial-container">
      <div className="testmonial-content">
        <h2 className="Test-Title">What Others Say About Me</h2>
        <div className="testimonial-grid">
            {Testimonials.map (({id,Text,personname,post,img,href})=> (
          <div className="testimonial-card" key={post}>
              <div className="testimnial-text">
              {Text}
              </div>
              <div className="textimonial-avtar">
                <img src={img} alt="" />
              </div>
              <div className="textimonial-deatils">
                <a href={href}><h3>{personname}</h3></a>
                <p>{post}</p>
              </div>
            </div>
            ))}
            
          {/* <div className="testimonial-card">
            <div className="testimnial-text">
              "study-sync Revolutionized my classNameroom Engaging content and
              teacher resources make learning Enjoyable highly recommended for
              educators"
            </div>
            <div className="textimonial-avtar">
              <img src="tech/profile.png" alt="" />
            </div>
            <div className="textimonial-deatils">
              <h3>Sumit moni</h3>
              <p>Full stack developer</p>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimnial-text">
              "study-sync Revolutionized my classNameroom Engaging content and
              teacher resources make learning Enjoyable highly recommended for
              educators"
            </div>
            <div className="textimonial-avtar">
              <img src="tech/tailwind.png" alt="" />
            </div>
            <div className="textimonial-deatils">
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
