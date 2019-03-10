import React from 'react';
import { shallow } from 'enzyme';
// import { BrowserRouter } from 'react-router-dom';
import { Page404 } from '..';

describe('AppHeader', () => {
  it('should render the 404 page', () => {
    expect(shallow(<Page404 />)).toBeDefined();
  });
});
