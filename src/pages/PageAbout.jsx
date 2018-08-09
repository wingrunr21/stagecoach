import React from "react";
import VideoSunset from "../assets/wheat_field.mp4"

const PageAbout = () => {
  return (
    <div className="page-wrapper">
      <h1>About</h1>
      <p>Stagecoach Meat Company, LLC is a family-owned and operated custom processing and retail meat sales company, located in Wiggins, Colorado. Although the Company opened for business in March 2006, the owner and manager of the Company has over 20 years of experience in the meat business. Our processing plant in Wiggins also includes a retail store with a full line of high quality, USDA-inspected beef and pork products.</p>
      <video className="video-background" autoPlay muted loop>
        <source src={VideoSunset} type="video/mp4" />
      </video>
    </div>
  )
}

export default PageAbout;
