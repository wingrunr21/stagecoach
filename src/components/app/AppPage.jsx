import React from 'react';
import PropTypes from 'prop-types';
import { Page404 } from '../pages'

const AppPage = ({ page, children }) => {
  return page ? <>{ children }</> : <>{ Page404 }</>
};

AppPage.propTypes = {
  page: PropTypes.func,
};

AppPage.defaultProps = {
  page: () => {},
}

export default AppPage;
