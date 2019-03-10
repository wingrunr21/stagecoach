import React from 'react';
import { shallow } from 'enzyme';
import { PageHome } from '..';

describe('PageHome', () => {
  it('should render the Home page', () => {
    expect(shallow(<PageHome />)).toBeDefined();
  });
});
