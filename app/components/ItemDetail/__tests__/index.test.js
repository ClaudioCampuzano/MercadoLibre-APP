import React from 'react';

import { render } from '@testing-library/react';

import { ItemDetail } from '../ItemDetail';

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
  description: 'lorem',
  picture: 'htt://blabla.com',
  condition: 'new',
  sold_quantity: 250,
  price: { amount: 15121, currency: 'CLP' },
};

const componentRender = (props = { data }) => {
  return render(<ItemDetail {...props} />);
};

describe('ItemDetail', () => {
  it('renders', () => {
    const { container } = componentRender();

    expect(container).toMatchSnapshot();
  });
});
