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
  <main className="">
    <Switch>
      <Route exact path="/" render={() => <PageHome />} />
      <Route exact path="/products" render={() => <PageProducts />} />
      <Route exact path="/services" render={() => <PageServices />} />
      <Route exact path="/faq" render={() => <PageFAQ />} />
      <Route exact path="/contact" render={() => <PageContact />} />
      <Route exact path="/about" render={() => <PageAbout />} />
      <Route component={Page404} />
    </Switch>
  </main>
);
