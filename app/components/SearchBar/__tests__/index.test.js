import React from 'react';

import { render } from '@testing-library/react';

import { SearchBar } from '../SearchBar';

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

const componentRender = () => {
  return render(<SearchBar />);
};

describe('SearchBar', () => {
  it('renders', () => {
    const { container } = componentRender();

    expect(container).toMatchSnapshot();
  });
});
