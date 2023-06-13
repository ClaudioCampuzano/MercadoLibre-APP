import useSWR from 'swr';
import { API_URL } from '@/constants';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useFetchProducts = (productToSearch) => {
  const { data, error, isLoading } = useSWR(`${API_URL}/items?q=${productToSearch}`, fetcher);

  return { products: data, isError: error, isLoading };
};

export { useFetchProducts };
