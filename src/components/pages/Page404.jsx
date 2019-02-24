/* React */
import React from "react";

/* Stylesheets */
import "../../styles/pages/Page404.css";

/* Assets */
import CowSkull from "../../assets/images/cow-skull.jpg";


const Page404 = () => (
  <main className="main-404">
    <img id="img-cow-skull" src={CowSkull} alt="404"></img>
    <h4>You gambled and you lost...</h4>
  </main>
);

export default Page404;
