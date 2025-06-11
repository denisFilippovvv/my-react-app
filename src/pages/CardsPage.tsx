import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import CardList from '../components/CardList/CardList';
import styles from './CardsPage.module.css';

const CardsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const limit = parseInt(searchParams.get('limit') || '10', 10);

  return (
    <div className={styles.cardsPageContainer}>
      <div className={styles.pageHeader}>
        <h1>All Job Cards</h1>
        <Link to="/" className={styles.backLink}>← Back to Home</Link>
      </div>
      <CardList limit={limit} />
    </div>
  );
};

export default CardsPage;