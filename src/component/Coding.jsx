import React from "react";
import "../styles/coding.css";

const Coding = () => {
  const profile = [
    {
      src: "tech/github.jpg",
      link: "https://github.com/prathmesh0125",
      alt: "GitHub",
      p:"22+ Reprostrety"
    },
    {
      src: "tech/Leetcode.jpg",
      link: "https://leetcode.com/Bidve_prathmesh/",
      alt: "Leetcode",
      p:"1* Leetcode",
      p1: "250+ Problem solved",
    },
    {
      src: "tech/GFG.jpg",
      link: "https://auth.geeksforgeeks.org/user/bidveprattq1l",
      alt: "GFG",
      p: "Institute Rank 1",
      p1:"300+ problem solved"
    },
    {
      src: "tech/Codestudi.png",
      link: "https://www.codingninjas.com/studio/profile/Prathmeshbidve",
      alt: "Codestudio",
      p: "Level 7(Expert)",
      p1:"100+ problem solved"

    },
  ];
  return (
    <div>


        <h2>Coding Profile</h2>
    {/* <h2 class="Test-Title">Coding Profile</h2> */}

      <div className="ProfileContainer">
      {profile.map(({ src, link, alt, p,p1 }) => (
        <div className="Profilecard" key={src}>
          <img src={src} alt={alt}  />
          <div className="plate">
            <div className="profileInfo">
              <div className="button">
                <p>{p}</p>
                <p>{p1}</p>
              </div>
              <a href={link} target="_blank" rel="noreferrer" className="profileLink">
                {" "}
                View Profile
              </a>
            </div>
          </div>
        </div>
      ))}

     
    </div>
    </div>

  );
};

export default Coding;
