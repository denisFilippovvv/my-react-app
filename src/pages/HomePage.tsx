import React from 'react';
import { Link } from 'react-router-dom';
import Candidates from '../components/Candidates/Candidates';
import CardList from '../components/CardList/CardList';
import Connect from '../components/Connect/Connect';
import Setup from '../components/Setup/Setup';
import styles from './HomePage.module.css';

const HomePage: React.FC = () => {
  return (
    <div className={styles.homeContainer}>
      <Candidates />
      
      <section className={styles.cardSection}>
        <CardList limit={3} disableLinks={true} />
        <div className={styles.allCardsButton}>
          <Link to="/cards" className={styles.buttonLink}>
            View All Cards
          </Link>
        </div>
      </section>

      <Connect />
      <Setup />
    </div>
  );
};

export default HomePage;