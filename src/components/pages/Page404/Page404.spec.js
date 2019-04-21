import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { Page404 } from '..';

describe('<Page404 />', () => {
  it('should render the 404 page', () => {
    const { container } = render(<Page404 />);
    expect(container).toBeDefined();
  });
});
