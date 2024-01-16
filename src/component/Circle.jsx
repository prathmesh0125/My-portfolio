import React from 'react'
import "../styles/circle.css";

const Circle = () => {
  return (
    <div>
       <div className="circle-container">
      <div className="sun"><h1>MERN</h1></div>
      <div className="MongoDB"><img src="tech/mongodb.png" alt="" /></div>
      <div className="express"><img src="tech/redux.png" alt="" /></div>
      <div className="React">
        <img src="tech/reactjs.png" alt=""/>
      </div>
      <div className="mars">
        <img src="tech/nodejs.png" alt="" />
      </div>

      </div>
      
    </div>
  )
}

export default Circle
