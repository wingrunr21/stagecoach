import React from 'react';
import PropTypes from 'prop-types';
import './CutSheet.scss';

export const CutSheet = props => {
  const {
    type,
    svg,
  } = props;

  return (
    <div className="div-cutsheet-container">
      <h1></h1>
    </div>
  );
};

CutSheet.propTypes = {
  type: PropTypes.string,
  svg: PropTypes.string,
};

CutSheet.defaultPropTypes = {
  type: '',
  svg: '',
};