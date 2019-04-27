import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { PageProcessing } from '..';

describe('PageProcessing', () => {
  afterEach(cleanup);
  
  it('should render the FAQ page', () => {
    const { container } = render(<PageProcessing />);
    expect(container).toBeDefined();
  });
});
