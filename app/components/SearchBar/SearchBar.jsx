'use client';

import React, { useState } from 'react';
import styles from './SearchBar.module.scss';
import Link from 'next/link';
import { MercadoLibre, Search } from '@/public';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const SearchBar = () => {
  const [product, setProduct] = useState('');
  const router = useRouter();

  const handleEnter = (e) => e.key === 'Enter' && handleSearchClick();
  const handleSearchClick = () => router.push(`/items?search=${product}`);

  return (
    <header className={styles.header}>
      <Link href="/">
        <Image src={MercadoLibre} alt="MercadoLibre" className={styles.imagenLogo} />
      </Link>
      <input
        placeholder="Busca productos, marcas y más..."
        className={styles.searchBox}
        onChange={(e) => setProduct(e.target.value)}
        value={product}
        onKeyDown={(e) => handleEnter(e)}
      />
      <button onClick={handleSearchClick}>
        <Image src={Search} alt="Search" className={styles.imagenSearch} />
      </button>
    </header>
  );
};
