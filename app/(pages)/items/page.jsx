'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import styles from './items.module.scss';
import { Item } from '@/app/components/Item/Item';
import { useFetchProducts } from '@/api/useFetchProducs';
import { StatusMessage } from '@/components/StatusMessage/StatusMessage';
import { Breadcrumb } from '@/components/Breadcrumb/Breadcrumb';

const Items = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get('search');

  const { products, isLoading, isError } = useFetchProducts(search);
  const { items, categories } = products || {};
  return (
    <div className={styles.container}>
      {isLoading || isError ? (
        <>
          {isLoading && <StatusMessage status="loading" />}
          {isError && <StatusMessage status="error" />}
        </>
      ) : (
        <>
          <Breadcrumb pathFromRoute={categories} />
          <div className={styles.contentProducts}>
            {items?.slice(0, 4).map((product) => (
              <Item key={product.id} data={product} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Items;
