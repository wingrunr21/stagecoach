import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { PageFAQ } from '..';

describe('PageFAQ', () => {
  afterEach(cleanup);

  it('should render the FAQ page', () => {
    const { container } = render(<PageFAQ />);
    expect(container).toBeDefined();
  });
});
