import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from './Header.module.css';
import Modal from './Modal';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <header className={`${styles.page_header} ${styles.header}`}>
      <nav>
        <ul className={styles.logo}>Jobly</ul>
        
        {isMobile ? (
          <button className={styles.menuToggle}>☰</button>
        ) : (
          <nav className={styles.header_nav}>
            <ul>For Recruiters</ul>
            <ul><button className={styles.header_button1}>Sign Up</button></ul>
            <ul>
              <button 
                className={styles.header_button2}
                onClick={() => setIsModalOpen(true)}
              >
                Log In
              </button>
            </ul>
          </nav>
        )}
      </nav>
      
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)} />
      )}
    </header>
  );
};

export default Header;