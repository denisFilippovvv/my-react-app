import React, { useEffect, useState } from 'react';
import styles from './Preloader.module.css';

interface PreloaderProps {
  isLoading: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ isLoading }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setIsAnimating(true);
      
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 500); 
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!isVisible) return null;

  return (
    <div className={`${styles.preloader} ${isAnimating ? styles.hidden : ''}`}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Preloader;