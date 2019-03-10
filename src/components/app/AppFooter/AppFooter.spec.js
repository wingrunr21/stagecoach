import React from 'react';
import { shallow } from 'enzyme';
import { AppFooter } from '..';

describe('AppHAppFootereader', () => {
  it('should render an HTML5 footer', () => {
    const wrapper = shallow(<AppFooter />)
    expect(wrapper).toBeDefined();
  });
});
