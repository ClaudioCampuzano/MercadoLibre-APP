import styles from '@/styles/globals.module.scss';
import { Inter } from 'next/font/google';
import { SearchBar } from '@/components/SearchBar/SearchBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mercado Libre',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={inter.className}>
      <body className={styles.body}>
        <SearchBar />
        {children}
      </body>
    </html>
  );
}
