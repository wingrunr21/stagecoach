import React from 'react';
import { shallow, mount } from 'enzyme';
import { AppMain } from './';
import { BrowserRouter } from 'react-router-dom';

describe('AppHeader', () => {
  jest.mock();

  it('should render the app level HTML5 main tag', () => {
    const wrapper = mount(<AppMain />)
    expect(wrapper).toBeDefined();
  });
});
