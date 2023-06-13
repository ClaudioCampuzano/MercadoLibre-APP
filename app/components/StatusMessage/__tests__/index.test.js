import React from 'react';

import { render } from '@testing-library/react';

import { StatusMessage } from '../StatusMessage';

const componentRender = (props = { status: 'loading' }) => {
  return render(<StatusMessage {...props} />);
};

describe('StatusMessage', () => {
  it('renders', () => {
    const { container } = componentRender();

    expect(container).toMatchSnapshot();
  });
});
