import React from 'react';
import styles from './ItemDetail.module.scss';
import Image from 'next/image';
import { formatCurrency } from '@/utils/formatCurrency';
const ItemDetail = ({ data }) => {
  const { title, description, picture, condition, sold_quantity: soldQuantity, price } = data;

  return (
    <article className={styles.article}>
      <section className={styles.section}>
        <Image src={picture} alt="article" width={400} height={400} />
        <div>
          <h4>{`${condition === 'new' ? 'Nuevo' : 'Usado'} ${soldQuantity} vendidos`}</h4>
          <h3>{title}</h3>
          <h1>{formatCurrency(price)}</h1>
          <button className={styles.button}>Comprar</button>
        </div>
      </section>
      <h2>Descripción del producto</h2>
      <p>{description}</p>
    </article>
  );
};

export { ItemDetail };
