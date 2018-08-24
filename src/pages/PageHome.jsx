/* React Imports */
import React from "react";

/* Stylesheet and Asset Imports */
import "../styles/PageHome.css";
import VideoSunset from "../assets/sunset.mp4"


export const PageHome = (props) => {
  return (
    <div id="div-page-wrapper-home" className="div-page-wrapper">
      <h1>Main</h1>
      <video className="video-background" autoPlay muted loop>
        <source src={VideoSunset} type="video/mp4" />
      </video>
    </div>
  );
};
