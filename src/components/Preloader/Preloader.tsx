import React, { useEffect, useState } from 'react';
import styles from './Preloader.module.css';

interface PreloaderProps {
  isLoading: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ isLoading }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let timer: number | null = null;
    
    if (isLoading) {
      setIsVisible(true);
      setIsAnimating(false);
    } else if (isVisible) {
      setIsAnimating(true);
      
      timer = window.setTimeout(() => {
        setIsVisible(false);
      }, 500);
    }

    return () => {
      if (timer !== null) {
        clearTimeout(timer);
      }
    };
  }, [isLoading, isVisible]);

  if (!isVisible) return null;

  return (
    <div className={`${styles.preloader} ${isAnimating ? styles.hidden : ''}`}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Preloader;