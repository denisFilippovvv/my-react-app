import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import Modal from './Modal';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className={styles.page_header}>
      <nav>
        <Link to="/" className={styles.logo} onClick={() => setIsMobileMenuOpen(false)}>
          Jobly
        </Link>
        
        {isMobile ? (
          <button 
            className={styles.menuToggle} 
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>
        ) : (
          <div className={styles.header_nav}>
            <ul><Link to="/cards" className={styles.navLink}>All Cards</Link></ul>
            {/* Изменение здесь */}
            <ul>
              <Link to="/for-recruiters" className={styles.navLink}>
                For Recruiters
              </Link>
            </ul>
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
      
      <div 
        className={`${styles.menuBackdrop} ${isMobileMenuOpen ? styles.visible : ''}`} 
        onClick={() => setIsMobileMenuOpen(false)}
      />
      
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
        <div className={styles.mobileMenuHeader}>
          <h3>Menu</h3>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>
        
        <div className={styles.mobileMenuContent}>
          <Link 
            to="/cards" 
            className={styles.mobileMenuLink}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            All Cards
          </Link>
          
          {/* Изменение здесь */}
          <Link 
            to="/for-recruiters" 
            className={styles.mobileMenuLink}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            For Recruiters
          </Link>
          
          <button 
            className={`${styles.mobileMenuButton} ${styles.mobileMenuButton1}`}
          >
            Sign Up
          </button>
          
          <button 
            className={`${styles.mobileMenuButton} ${styles.mobileMenuButton2}`}
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsModalOpen(true);
            }}
          >
            Log In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;