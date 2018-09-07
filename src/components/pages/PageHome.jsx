/* React */
import React from "react";

/* Stylesheets */
import "../../styles/pages/PageHome.css";

/* Assets */
import CornField from "../../assets/images/corn-field.jpg";


export const PageHome = () => (
  <main class="main-home">
    <img id="img-corn-field" src={CornField} alt="Corn Field"></img>
    <section>
      <p>Welcome to Stagecoach Meat Co.</p>
    </section>
  </main>
);
