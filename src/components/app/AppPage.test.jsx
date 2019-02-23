import React from 'react';
import { mount, shallow } from 'enzyme';
import { AppPage} from './AppPage';
import { PageHome, Page404 } from '../pages'


describe('AppPage', () => {
  it('props.page should render an empty page without a page prop', () => {
    const wrapper = mount(<AppPage />)
    expect(wrapper).toBeDefined();
  });

  it('props.page should render an example page with a page prop', () => {
    const wrapper = mount(<AppPage page={ PageHome } />)
    expect(wrapper).toBeDefined();
  });
});