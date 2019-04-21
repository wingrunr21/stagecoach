import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { PageHome } from '..';

describe('<PageHome />', () => {
  afterEach(cleanup);

  it('should render the Home page', () => {
    const { container } = render(<PageHome />);
    expect(container).toBeDefined();
  });
});
