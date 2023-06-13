import React from 'react';

import { render } from '@testing-library/react';

import { Item } from '../Item';

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
    };
  },
}));

jest.mock('@/utils/formatCurrency', () => ({
  formatCurrency: () => '$456789',
}));

const data = {
  title: 'ipsum',
  picture: 'htpp://blabla.com',
  condition: 'new',
  price: { amount: 15121, currency: 'CLP' },
};

const componentRender = (props = { data }) => {
  return render(<Item {...props} />);
};

describe('Item', () => {
  it('renders', () => {
    const { container } = componentRender();
    expect(container).toMatchSnapshot();
  });
});
