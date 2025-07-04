import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './Layout.module.css';
import Preloader from '../Preloader/Preloader';

interface LayoutProps {
  children?: React.ReactNode;
  isLoading?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ isLoading = false }) => {
  return (
    <div className={styles.page}>
      <Preloader isLoading={isLoading} />
      <Header />
      
      <main className={styles.main}>
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;