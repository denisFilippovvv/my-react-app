import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Place from '../components/Place/Place';
import styles from './CardsPage.module.css';

const CardsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  
  const limitParam = searchParams.get('limit');
  const limit = limitParam && !isNaN(Number(limitParam)) 
    ? Math.max(1, parseInt(limitParam, 10)) 
    : 10;

  return (
    <div className={styles.cardsPageContainer}>
      <div className={styles.pageHeader}>
        <h1>Все карточки</h1>
        <Link to="/" className={styles.backLink}>← Вернуться на главную</Link>
      </div>
      
      <Place isHome={false} limit={limit} /> 
    </div>
  );
};

export default CardsPage;