import React from 'react';
import { render } from 'react-testing-library';
import { BeefCutsSVG } from '.';

describe('<BeefCutsSVG />', () => {
  test('it renders', () => {
    const { container } = render(<BeefCutsSVG />);
    expect(container).toBeDefined();
  });
});
