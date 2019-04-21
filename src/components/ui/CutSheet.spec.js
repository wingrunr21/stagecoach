import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { CutSheet } from './CutSheet';

describe('<CutSheet />', () => {
  afterEach(cleanup);

  it('should render the Cutsheet conponent', () => {
    const { container } = render(<CutSheet />); 
    expect(container).toBeDefined();
  });
});