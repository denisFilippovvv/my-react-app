import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import Modal from './Modal';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <header className={styles.page_header}>
      <nav>
        <Link to="/" className={styles.logo}>Jobly</Link>
        
        {isMobile ? (
          <button className={styles.menuToggle}>☰</button>
        ) : (
          <div className={styles.header_nav}>
            <ul><Link to="/cards" className={styles.navLink}>All Cards</Link></ul>
            <ul className={styles.navLink}>For Recruiters</ul>
            <ul><button className={styles.header_button1}>Sign Up</button></ul>
            <ul>
              <button 
                className={styles.header_button2}
                onClick={() => setIsModalOpen(true)}
              >
                Log In
              </button>
            </ul>
          </div>
        )}
      </nav>
      
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </header>
  );
};

export default Header;