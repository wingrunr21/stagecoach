/* React and React Router */ 
import React from "react";
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

/* Components */
import {
  PageHome,
  PageProcessing,
  PageRetail,
  PageFAQ,
  PageContact,
  Page404 } from '../pages';

/* Stylesheets */
import "../../styles/app/AppMain.css";

const AppMain = ({ location }) => {
  return (
    <React.Fragment>
      <TransitionGroup component={null} appear>
        <CSSTransition key={location.key} classNames={'fade'} timeout={{enter: 500, exit: 500}}>
          <Switch location={location}>
            <Route exact path="/" component={PageHome} />
            <Route exact path="/processing" component={PageProcessing} />
            <Route exact path="/retail" component={PageRetail} />
            <Route exact path="/faq" component={PageFAQ} />
            <Route exact path="/contact" component={PageContact} />
            <Route component={Page404} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </React.Fragment>
  );
};

AppMain.propTypes = {
  history: PropTypes.object,
};

AppMain.defaultProps = {
  history: null,
}

export default withRouter(AppMain);
