import React from "react";

import VideoSunset from "../assets/sunset.mp4"

// import "../styles/PageHome.css";


const PageHome = () => {
  return (
    <div className="page-wrapper">
      <h1>Main</h1>
      <video className="video-background" autoPlay muted loop>
        <source src={VideoSunset} type="video/mp4" />
      </video>
    </div>
  )
}

export default PageHome;