'use client';

import React from 'react';
import { useFetchProductDetail } from '@/api/useFetchProductDetail';
import styles from './id.module.scss';
import { Breadcrumb } from '@/components/Breadcrumb/Breadcrumb';
import { ItemDetail } from '@/components/ItemDetail/ItemDetail';
import { StatusMessage } from '@/components/StatusMessage/StatusMessage';

const Item = ({ params }) => {
  const { id } = params;
  const { product: productData, isLoading, isError } = useFetchProductDetail(id);

  const { item, categories } = productData || {};
  return (
    <div className={styles.container}>
      {isLoading || isError ? (
        <>
          {isLoading && <StatusMessage status="loading" />}
          {isError && <StatusMessage status="error" />}
        </>
      ) : (
        <div className={styles.content2}>
          <div className={styles.content}>
            <Breadcrumb pathFromRoute={categories} />
            <ItemDetail data={item} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Item;
