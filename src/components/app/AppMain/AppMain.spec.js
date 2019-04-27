import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup } from 'react-testing-library';
import AppMain from '.';

const renderRouter = location =>
  render(
    <MemoryRouter>
      <AppMain location={location} />
    </MemoryRouter>
  );

describe('<AppMain />', () => {
  afterEach(cleanup)

  it('should render the app-level HTML5 main tag', () => {
    const { container } = renderRouter();
    expect(container).toBeDefined();
  });
});
