import React from 'react';
import Image from 'next/image';
import { Error, Spinner } from '@/public';
import styles from './StatusMessage.module.scss';

const StatusMessage = ({ status }) => {
  if (status === 'loading')
    return (
      <div className={styles.container}>
        <Image src={Spinner} alt="Loading" width="50" height="50" />
        <span>Cargando...</span>
      </div>
    );

  if (status === 'error')
    return (
      <div className={styles.container}>
        <Image src={Error} alt="Error" width="50" height="50" />
        <span>Error, intente nuevamente</span>
      </div>
    );

  return undefined;
};

export { StatusMessage };
