import React from 'react';
import { reander, cleanup } from 'react-testing-library';
import { PageProcessing } from '..';

describe('PageProcessing', () => {
  it('should render the FAQ page', () => {
    const { container } = render(<PageProcessing />);
    expect(container).toBeDefined();
  });
});
