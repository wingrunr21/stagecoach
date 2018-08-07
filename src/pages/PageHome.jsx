import React from "react";
import VideoSunset from "../assets/sunset.mp4"

const PageHome = () => {
  return (
    <div style={{overflow: 'hidden'}}>
      <h1>Main</h1>
      <video id="videoSunset" autoPlay muted loop>
        <source src={VideoSunset} type="video/mp4" />
      </video>
    </div>
  )
}

export default PageHome;