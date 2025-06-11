import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import CardList from '../components/CardList/CardList';
import styles from './CardsPage.module.css';

const CardsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  
  const limitParam = searchParams.get('limit');
  const limit = limitParam && !isNaN(Number(limitParam)) ? Math.max(1, parseInt(limitParam, 10)) : 10;
  
  const cardParam = searchParams.get('card');
  const cardIndex = cardParam && !isNaN(Number(cardParam)) ? Math.max(0, parseInt(cardParam, 10)) : 0;

  return (
    <div className={styles.cardsPageContainer}>
      <div className={styles.pageHeader}>
        <h1>All Job Cards</h1>
        <Link to="/" className={styles.backLink}>← Back to Home</Link>
      </div>
      <CardList limit={limit} disableLinks={false} />
    </div>
  );
};

export default CardsPage;