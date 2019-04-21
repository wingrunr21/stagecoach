import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { PageHome } from '../../pages'
import AppPage from './AppPage';

describe('AppPage', () => {
  afterEach(cleanup);

  it('should render Page404 by default without props.page', () => {
    const { container } = render(<AppPage />)
    expect(container).toBeDefined();
  });

  it('props.page should render an example page with a page prop', () => {
    const { container } = render(<AppPage page={ PageHome } />)
    expect(container).toBeDefined();
  });
});
