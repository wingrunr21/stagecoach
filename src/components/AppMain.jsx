/* React and React Router */ 
import React from "react";
import { Switch, Route } from "react-router-dom";

/* Components */
import { PageHome } from '../pages/PageHome';
import { PageProducts } from '../pages/PageProducts';
import { PageServices } from '../pages/PageServices';
import { PageContact } from '../pages/PageContact';
import { PageAbout } from '../pages/PageAbout';
import { PageFAQ } from '../pages/PageFAQ';
import { Page404 } from "../pages/Page404";

/* Stylesheets */
import "../styles/AppMain.css";

/* Assets */
import ImageCorn from "../assets/corn-field.jpg";
import ImageCow from "../assets/agricultural-agriculture-animal.jpg";
import ImageBarley from "../assets/agriculture-barley-field.jpg";
import ImageBales from "../assets/agriculture-arable-bales.jpg";


export const backgroundImages = {
  home: ImageCorn,
  products: ImageBarley,
  services: ImageBales,
  contact: "",
  faq: ImageCow,
  about: ""
}

export const BackgroundContext = React.createContext(backgroundImages.faq);

export const AppMain = (props) => {  
  return (
    <BackgroundContext.Consumer>
      { bg => (
        <main style={{ backgroundImage: `url(${bg})` }}>
          <Switch>
            <Route exact path="/" component={PageHome} />} />
            <Route exact path="/products" component={PageProducts} />
            <Route exact path="/services" component={PageServices} />
            <Route exact path="/faq" component={PageFAQ} />
            <Route exact path="/contact" component={PageContact} />
            <Route exact path="/about" component={PageAbout} />
            <Route component={Page404} />
          </Switch>
        </main>
      )}
    </BackgroundContext.Consumer>
  )
};
