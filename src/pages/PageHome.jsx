/* React */
import React from "react";

/* Components */
import { BackgroundContext, backgroundImages } from "../components/AppMain";

/* Stylesheets */
import "../styles/PageHome.css";


export const PageHome = () => {
  console.log(BackgroundContext);

  return (
    <React.Fragment>
      <BackgroundContext.Provider value={backgroundImages.home}>
        <h1>Main</h1>    
      </BackgroundContext.Provider>
    </React.Fragment>
  )
};
