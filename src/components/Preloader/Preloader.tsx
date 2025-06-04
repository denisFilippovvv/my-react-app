import React, { useEffect, useState } from 'react';
import styles from './Preloader.module.css';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 секунды загрузки

    return () => clearTimeout(timer);
  }, []);

  return isLoading ? (
    <div className={styles.preloader}>
      <div className={styles.loader}></div>
    </div>
  ) : null;
};

export default Preloader;