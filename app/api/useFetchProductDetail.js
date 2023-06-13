import useSWR from 'swr';
import { API_URL } from '@/constants';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useFetchProductDetail = (productId) => {
  const { data, error, isLoading } = useSWR(`${API_URL}/items/${productId}`, fetcher);

  return { product: data, isError: error, isLoading };
};

export { useFetchProductDetail };
