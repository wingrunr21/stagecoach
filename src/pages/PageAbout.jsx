import React from "react";
import VideoSunset from "../assets/wheat_field.mp4"

const PageAbout = () => {
  return (
    <div style={{overflow: 'hidden'}}>
      <h1>About</h1>
      <video id="videoWheatField" autoPlay muted loop>
        <source src={VideoSunset} type="video/mp4" />
      </video>
    </div>  )
}

export default PageAbout;