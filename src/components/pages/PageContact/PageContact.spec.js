import React from 'react';
import { shallow } from 'enzyme';
import { PageContact } from '..';

describe('PageContact', () => {
  it('should render the Contact page', () => {
    expect(shallow(<PageContact />)).toBeDefined();
  });
});
