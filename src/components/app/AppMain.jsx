/* React and React Router */ 
import React from "react";
import { Switch, Route } from "react-router-dom";

/* Components */
import { PageHome } from '../pages/PageHome';
import { PageRetail } from '../pages/PageRetail';
import { PageServices } from '../pages/PageServices';
import { PageContact } from '../pages/PageContact';
import { PageAbout } from '../pages/PageAbout';
import { PageFAQ } from '../pages/PageFAQ';
import { Page404 } from "../pages/Page404";

/* Stylesheets */
import "../../styles/app/AppMain.css";


export const AppMain = () => {  
  return (
    <Switch>
      <Route exact path="/" component={PageHome} />
      <Route exact path="/services" component={PageServices} />
      <Route exact path="/retail" component={PageRetail} />
      <Route exact path="/faq" component={PageFAQ} />
      <Route exact path="/contact" component={PageContact} />
      <Route exact path="/about" component={PageAbout} />
      <Route component={Page404} />
    </Switch>
  )
};
