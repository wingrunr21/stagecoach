import React from 'react';
import { shallow } from 'enzyme';
import { AppHeader } from '..';

describe('AppHeader', () => {
  it('should render an HTML5 header', () => {
    const wrapper = shallow(<AppHeader />)
    expect(wrapper).toBeDefined();
  });
});
