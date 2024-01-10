import React from 'react'
import "../styles/circle.css";

const Circle = () => {
  return (
    <div>
       <div className="circle-container">
      <div className="sun"><h1>MERN</h1></div>
      <div className="MongoDB"><img src="tech/mongodb.png" alt="" srcset=""/></div>
      <div className="express"><img src="tech/redux.png" alt="" srcset=""/></div>
      <div className="React">
        <img src="tech/reactjs.png" alt="" srcset=""/>
      </div>
      <div className="mars">
        <img src="tech/nodejs.png" alt="" srcset=""/>
      </div>

      </div>
      
    </div>
  )
}

export default Circle
