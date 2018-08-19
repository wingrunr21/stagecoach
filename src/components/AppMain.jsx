import React from "react";
import {Route} from "react-router-dom";

/* App Page Imports */
import PageHome from '../pages/PageHome';
import PageProducts from '../pages/PageProducts';
import PageServices from '../pages/PageServices';
import { PageContact } from '../pages/PageContact';
import { PageAbout } from '../pages/PageAbout';
import { PageFAQ } from '../pages/PageFAQ';


export const AppMain = (props) => {
  return (
    <main>
      <Route path="/" exact component={PageHome} />
      <Route path="/products" component={PageProducts} />
      <Route path="/services" component={PageServices} />
      <Route path="/FAQ" component={PageFAQ} />
      <Route path="/contact" component={PageContact} />
      <Route path="/about" component={PageAbout} />
    </main>
  );
}