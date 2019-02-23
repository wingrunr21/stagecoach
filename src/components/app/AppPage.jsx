import React from 'react';
import PropTypes from 'prop-types';

const AppPage = ({ page }) => {
  return page ? <>{ page }</> : null
};

AppPage.propTypes = {
  page: PropTypes.func,
};

AppPage.defaultProps = {
  page: () => {},
}

export default AppPage;