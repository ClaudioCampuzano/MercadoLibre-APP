import React from 'react';
import Link from 'next/link';
import { formatCurrency } from '@/utils/formatCurrency';
import Image from 'next/image';
import styles from './Item.module.scss';

const Item = ({ data }) => {
  const { title, picture, condition, price } = data;
  return (
    <div className={styles.container}>
      <Link href={`/items/${data.id}`} className={styles.link}>
        <article className={styles.article}>
          <Image src={picture} alt="article" width={150} height={150} />
          <section>
            <div className={styles.price}>
              <h2>{formatCurrency(price)}</h2>
              {condition === 'new' && '🟢'}
            </div>
            <h3>{title}</h3>
          </section>
        </article>
      </Link>
    </div>
  );
};

export { Item };
