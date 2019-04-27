import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import App from '.';

describe('App', () => {
  afterEach(cleanup);

  it('should render the App container', () => {
    const { container } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>);
    expect(container).toBeDefined();
  });
});
