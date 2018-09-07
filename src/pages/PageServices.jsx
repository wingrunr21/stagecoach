/* React */
import React from "react";

/* Components */
import { BackgroundContext, backgroundImages } from "../components/AppMain";

/* Stylesheets */
import "../styles/PageServices.css";


export const PageServices = () => {
  console.log(BackgroundContext);

  return (
    <React.Fragment>
      <BackgroundContext.Provider value={backgroundImages.services}>
        <h1>Products</h1>
      </BackgroundContext.Provider>
    </React.Fragment>
  )
};
