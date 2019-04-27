import React from 'react';
import { render, findAllByTestId } from 'react-testing-library';
import { PorkCutsSVG } from '.';

describe(',PorkCutsSVG />', () => {
  test('it renders', () => {
    const { container } = render(<PorkCutsSVG />);
    expect(container).toBeDefined();
  });
});
