import React from 'react';
import { shallow } from 'enzyme';
import { PageHome } from '../pages'
import AppPage from './AppPage';

describe('AppPage', () => {
  it('should render Page404 by default without props.page', () => {
    const wrapper = shallow(<AppPage />)
    expect(wrapper).toBeDefined();
  });

  it('props.page should render an example page with a page prop', () => {
    const wrapper = shallow(<AppPage page={ PageHome } />)
    expect(wrapper).toBeDefined();
  });
});
