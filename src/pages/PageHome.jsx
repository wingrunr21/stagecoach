import React from "react";
import VideoSunset from "../assets/sunset.mp4"

const PageHome = () => {
  return (
    <div>
      <h1>Main</h1>
      <video id="videoSunset" autoPlay muted loop style={{overflowY: 'hidden'}}>
        <source src={VideoSunset} type="video/mp4" />
      </video>
    </div>
  )
}

export default PageHome;