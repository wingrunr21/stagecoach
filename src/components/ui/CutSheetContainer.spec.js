import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { CutSheetContainer } from '.';

describe('<CutSheetContainer />', () => {
  afterEach(cleanup);

  it('accepts props', () => {
    const { container } = render(<CutSheetContainer />);
    expect(container).toBeDefined();
  });
});
