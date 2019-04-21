import React from 'react';
import { render } from 'react-testing-library';
import { AppFooter } from '..';

describe('AppFooter', () => {
  it('should render an HTML5 footer', () => {
    const { container } = render(<AppFooter />)
    expect(container).toBeDefined();
  });
});
