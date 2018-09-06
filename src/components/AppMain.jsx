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


export const AppMain = () => (
  <main>
    <Switch>
      <Route exact path="/" render={() => <PageHome className="page-home" />} />
      <Route exact path="/products" render={() => <PageProducts className="page-products" />} />
      <Route exact path="/services" render={() => <PageServices className="page-services" />} />
      <Route exact path="/faq" render={() => <PageFAQ className="page-faq" />} />
      <Route exact path="/contact" render={() => <PageContact className="page-contact" />} />
      <Route exact path="/about" render={() => <PageAbout className="page-about" />} />
      <Route component={Page404} />
    </Switch>
  </main>
);
