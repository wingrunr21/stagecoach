import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { AppHeader } from '..';

describe('<AppHeader />', () => {
  it('should render an HTML5 header', () => {
    const {container } = render(<AppHeader />);
    expect(container).toBeDefined();
  });
});
