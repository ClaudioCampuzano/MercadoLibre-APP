import React from 'react';

import { render } from '@testing-library/react';

import { Breadcrumb } from '../Breadcrumb';

const componentRender = (props = { pathFromRoute: ['first', 'second'] }) => {
  return render(<Breadcrumb {...props} />);
};

describe('Breadcrumb', () => {
  it('renders', () => {
    const { container } = componentRender();

    expect(container).toMatchSnapshot();
  });
});
