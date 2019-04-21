import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { App } from '..';

describe('App', () => {
  afterEach(cleanup);

  it('should render the App container', () => {
    const { container } = render(<App />);
    expect(container).toBeDefined();
  });
});
