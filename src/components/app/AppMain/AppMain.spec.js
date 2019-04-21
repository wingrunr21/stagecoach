import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { AppMain } from '..';

describe('AppHeader', () => {
  afterEach(cleanup)

  it('should render the app level HTML5 main tag', () => {
    const { container } = render(<AppMain />)
    expect(container).toBeDefined();
  });
});
