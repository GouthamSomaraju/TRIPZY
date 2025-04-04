import React, { useState } from "react";
import video from './Assets/1.mp4'
// import video2 from '../../../assets/1.mp4'


const Home = () => {
  
  return (
    <div className="position-relative w-100 vh-100 overflow-hidden">
      {/* Background Video */}
      <video className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <h1>hello</h1>

    </div>
  );
};

export default Home;
