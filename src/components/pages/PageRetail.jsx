/* React */
import React from "react";

/* Stylesheets */
import "./PageRetail.css";

/* Assets */
import BarbedWire from "../../assets/images/barbed-wire.jpg";


const PageRetail = () => (
    <main className="main-retail">
      <div id="div-retail-banner-wrapper">
        <section>
          <h3>Our Retail Store</h3>
        </section>
        <div id="div-bales-image" />
      </div>
      <p style={{ textAlign: 'justify' }}>We sell the following products as retail items. We also offer a full line of USDA Choice beef, pork cuts, chicken, pies, and Farmland All Beef Hot Dogs as well as custom processing services.</p>
      <p style={{ textAlign: 'center' }}><em>Please call for current prices and availabilty.</em></p>
      <section id="section-retail-beef">
        <div id="div-background-beef" className="grid-cell-background"/>
        <h4>Beef</h4>
        <ul id="ul-retail-beef">
          <li>Beef Steak</li>
          <li>New York Strip</li>
          <li>T-Bone</li>
          <li>Ribeye</li>
          <li>Roasts</li>
        </ul>
      </section>
      <img className="img-barbed-wire" src={BarbedWire} alt="Barbed Wire Flourish"></img>
      <section id="section-retail-pork-links">
        <div id="div-background-pork-links" className="grid-cell-background"/>
        <h4>Pork Links</h4>
        <ul id="ul-retail-pork-links">
          <li>Bratwurst</li>
          <li>Apple Bratwurst</li>
          <li>Beef Bratwurst</li>
          <li>Blue Ribbon Bratwurst</li>
          <li>German</li>
          <li>Polish</li>
          <li>Cajun-Style</li>
          <li>Andoullie</li>
          <li>Hot Italian</li>
          <li>Mild Italian</li>
          <li>Hot Link</li>
          <li>Cheddar Jalapeno</li>
          <li>Pepper Jack Jalapeno</li>
        </ul>
      </section>
      <img className="img-barbed-wire" src={BarbedWire} alt="Barbed Wire Flourish"></img>
      <section id="section-retail-pork-bulk">
        <div id="div-background-pork-bulk" className="grid-cell-background"/>
        <h4>Pork Bulk</h4>
        <ul id="ul-retail-pork-bulk">
          <li>Regular Breakfast</li>
          <li>Maple Breakfast</li>
          <li>Hot Breakfast</li>
          <li>Apple Breakfast</li>
          <li>Jalapeno Breakfast</li>
          <li>Hot Italian</li>
          <li>Mild Italian</li>
          <li>Chorizo</li>
        </ul>
      </section>
    </main>
  );

  export default PageRetail;