import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { PageContact } from '..';

describe('<PageContact />', () => {
  afterEach(cleanup);
  
  it('should render the Contact page', () => {
    const { container } = render(<PageContact />);
    expect(container).toBeDefined();
  });
});
