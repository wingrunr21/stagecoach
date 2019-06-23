import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Page from './Page';

describe('<Page />', () => {
  afterEach(cleanup);

  it('renders without crashing', async () => {
    const { container } = render(<Page />);
    expect(container).toBeDefined();
  });
});