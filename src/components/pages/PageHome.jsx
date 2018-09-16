/* React */
import React from "react";

/* Stylesheets */
import "../../styles/pages/PageHome.css";

/* Assets */
import BarbedWire from "../../assets/images/barbed-wire.jpg";

export const PageHome = () => (
  <main className="main-home">
    <div id="div-grid-wrapper">
      <section>
        <h4>Welcome to Stagecoach Meat Co.</h4>
      </section>
      <div id="div-corn-field" />
      <div id="div-processing">
        <h4>Custom Processing</h4>
      </div>
      <div id="div-retail">
        <h4>Retail Shop</h4>
      </div>
    </div>
    {/* <img id="img-barbed-wire" src={BarbedWire} alt="Barbed Wire Flourish"></img> */}
    <p>Stagecoach Meat Company, LLC is a family-owned and operated custom processing and retail meat sales company, located in Wiggins, Colorado. Although the company opened for business in March 2006, the owner and manager of the company has over 30 years of experience in the meat business. Our processing plant in Wiggins also includes a retail store with a full line of high quality, USDA-inspected beef and pork products.</p>
    <p>The founder, Ray Von Loh, his wife, children, and a host of dedicated employees oversee day-to-day operations. Our number one goal is customer satisfaction, quality products, and service.</p>
  </main>
);
