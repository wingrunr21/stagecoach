import React from 'react';
import { shallow } from 'enzyme';
import { PageRetail } from './';

describe('PageRetail', () => {
  it('should render the Retail page', () => {
    expect(shallow(<PageRetail />)).toBeDefined();
  });
});
