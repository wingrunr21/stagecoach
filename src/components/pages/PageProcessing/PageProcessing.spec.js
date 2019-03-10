import React from 'react';
import { shallow } from 'enzyme';
import { PageProcessing } from '..';

describe('PageProcessing', () => {
  it('should render the FAQ page', () => {
    expect(shallow(<PageProcessing />)).toBeDefined();
  });
});
