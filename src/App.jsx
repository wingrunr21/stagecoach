/* React and React Router */
import React from 'react';

/* Components */
import { AppHeader } from "./components/app/AppHeader";
import { AppNav } from "./components/app/AppNav";
import { AppMain } from "./components/app/AppMain";
import { AppFooter } from "./components/app/AppFooter";

/* Stylesheets */
import './styles/app/App.css';

/* Assets */
import ImageCorn from "./assets/corn-field.jpg";
import ImageCow from "./assets/agricultural-agriculture-animal.jpg";
import ImageBarley from "./assets/agriculture-barley-field.jpg";
import ImageBales from "./assets/agriculture-arable-bales.jpg";


export const backgroundImages = {
  home: ImageCorn,
  products: ImageBarley,
  services: ImageBales,
  contact: "",
  faq: ImageCow,
  about: ""
}

export const BackgroundContext = React.createContext(backgroundImages.products);


export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <React.Fragment>
        <AppHeader />
        <AppNav />
        <AppMain />
        <AppFooter />
      </React.Fragment>
    );
  };
};
