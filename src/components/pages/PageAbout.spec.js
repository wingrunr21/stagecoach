import React from 'react';
import { shallow } from 'enzyme';
import { PageAbout } from './';

describe('PageAbout', () => {
  it('should render the About page', () => {
    expect(shallow(<PageAbout />)).toBeDefined();
  });
});
