import React from 'react';
import Candidates from '../components/Candidates/Candidates';
import Place from '../components/Place/Place';
import Connect from '../components/Connect/Connect';
import Setup from '../components/Setup/Setup';
import styles from './HomePage.module.css';

const HomePage: React.FC = () => {
  return (
    <div className={styles.homeContainer}>
      <Candidates />
      <Place />
      <Connect />
      <Setup />
    </div>
  );
};

export default HomePage;