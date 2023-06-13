import React, { Fragment } from 'react';
import { ChevronRight } from '@/public';
import styles from './Breadcrumb.module.scss';
import Image from 'next/image';

const Breadcrumb = ({ pathFromRoute = [] }) => {
  const current = pathFromRoute[pathFromRoute.length - 1];
  const previous = pathFromRoute.slice(0, pathFromRoute.length - 1);

  return (
    <nav className={styles.container}>
      {previous.map((label) => (
        <Fragment key={label}>
          <a className={styles.link} href={`/items?search=${label}`}>
            {label}
          </a>
          <Image
            src={ChevronRight}
            alt="Arrow"
            className={styles.imagenChevron}
            width="10"
            height="10"
          />
        </Fragment>
      ))}
      <span>{current}</span>
    </nav>
  );
};

export { Breadcrumb };
