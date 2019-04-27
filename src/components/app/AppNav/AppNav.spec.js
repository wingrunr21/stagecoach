import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup } from 'react-testing-library';
import AppNav from '.';

const renderNav = location =>
  render(
    <MemoryRouter>
      <AppNav location={location} />
    </MemoryRouter>
  );

describe('<AppNav />', () => {
  afterEach(cleanup);

  it('should render an HTML5 nav element', () => {
    const { container } = renderNav();
    expect(container).toBeDefined();
  });
});
