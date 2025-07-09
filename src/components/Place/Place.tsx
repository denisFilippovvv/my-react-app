import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Place.module.css';
import decoration from '../../assets/images/dop.png';
import avatar from '../../assets/images/avatar.png';
import CardList from '../CardList/CardList';

interface PlaceProps {
  isHome?: boolean;
  limit?: number; 
}

const Place: React.FC<PlaceProps> = ({ isHome = true, limit }) => {
  return (
    <section className={styles.place} aria-labelledby="section-title">
      <div className={styles.container}>
        <div className={styles.quote_container}>
          <img src={decoration} alt="Decorative element" className={styles.decoration} />
        </div>

        <img src={avatar} alt="Zhao Cui" className={styles.avatar} />
        <div className={styles.quote_content}>
          <p className={styles.quote}>
            Создай онлайн-присутствие. HackFlow делает тебя видимым для рекрутеров и партнёров
          </p>
          <p className={styles.name}>Алексей Петров</p>
          <p className={styles.position}>Основатель HackFlow</p>
          <h2 id="section-title">Всё, что нужно знать, в одном месте.</h2>
        </div>

        <CardList
          limit={isHome ? 3 : limit}
          disableLinks={isHome}
        />

        {isHome && (
          <div className={styles.allCardsButton}>
            <Link to="/cards" className={styles.buttonLink}>
              Все карточки
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Place;