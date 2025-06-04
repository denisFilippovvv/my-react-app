import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './Layout.module.css';
import Preloader from '../Preloader/Preloader';

type LayoutProps = {
  children: React.ReactNode;
  isLoading?: boolean;
};

const Layout = ({ children, isLoading = false }: LayoutProps) => {
  return (
    <div className={styles.page}>
      {isLoading && <Preloader />}
      
      <Header />
      
      <main className={styles.main}>
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;