import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { PageRetail } from '..';

describe('<PageRetail />', () => {
  afterEach(cleanup);

  it('should render the Retail page', () => {
    const { container } = render(<PageRetail />); 
    expect(container).toBeDefined();
  });
});
