/* React */
import React from "react";

/* Stylesheets */
import "../../styles/pages/PageRetail.css";


export const PageRetail = () => (
    <main className="main-retail">
      <p>We sell the following products as retail items. <em>* Please call ahead to verify current prices and availabilty. *</em></p>
      <section id="section-retail-beef">
        <h3>Beef</h3>
        <ul id="ul-retail-beef">
          <li>Beef Steak</li>
          <li>New York Strip</li>
          <li>T-Bone</li>
          <li>Ribeye</li>
          <li>Roasts</li>
        </ul>
      </section>
      <section id="section-retail-pork-links">
        <h3>Pork Links</h3>
        <ul id="ul-retail-pork-links">
          <li>Bratwurst</li>
          <li>Apple-Flavored Bratwurst</li>
          <li>Beef-Flavored Bratwurst</li>
          <li>Blue Ribbon Bratwurst</li>
          <li>German</li>
          <li>Polish</li>
          <li>Cajun-Style</li>
          <li>Andoullie</li>
          <li>Hot Italian</li>
          <li>Mild Italian</li>
          <li>Hot Link</li>
          <li>Cheddar Brats with Jalapeno</li>
          <li>Pepper Jack Brats with Jalapeno</li>
        </ul>
      </section>
      <section id="section-retail-pork-bulk">
        <h3>Pork Bulk</h3>
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

      <p>We also offer a full line of beef (USDA Choice) pork cuts, chicken, pies, Farmland All Beef Hot Dogs as wll as cusotom processing services</p>
    </main>
  );
