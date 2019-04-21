import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { AppNav } from '..';

describe('AppNav', () => {
  afterEach(cleanup);

  it('should render an HTML5 nav', () => {
    const { container } = render(<AppNav />);
    expect(container).toBeDefined();
  });
});
