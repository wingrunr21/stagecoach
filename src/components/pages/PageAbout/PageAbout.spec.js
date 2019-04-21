import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { PageAbout } from '..';

describe('<PageAbout />', () => {
  afterEach(cleanup);
  
  it('should render the About page', () => {
    const { container } = render(<PageAbout />);
    expect(container).toBeDefined();
  });
});
