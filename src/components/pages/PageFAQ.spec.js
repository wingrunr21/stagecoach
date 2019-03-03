import React from 'react';
import { shallow } from 'enzyme';
import { PageFAQ } from './';

describe('PageFAQ', () => {
  it('should render the FAQ page', () => {
    expect(shallow(<PageFAQ />)).toBeDefined();
  });
});
