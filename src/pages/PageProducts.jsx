/* React */
import React from "react";

/* Components */
import { BackgroundContext, backgroundImages } from "../components/AppMain";

/* Stylesheets */
import "../styles/PageProducts.css";


export const PageProducts = () => {
  console.log(BackgroundContext);

  return (
    <React.Fragment>
      <BackgroundContext.Provider value={backgroundImages.products}>
        <h1>Products</h1>
      </BackgroundContext.Provider>
    </React.Fragment>
  )
};
