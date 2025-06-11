import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import styles from './Place.module.css';
import decoration from '../../assets/images/dop.png';
import avatar from '../../assets/images/avatar.png';
import CardList from '../CardList/CardList';

const Place = () => {
  return (
    <section className={styles.place}>
      <div className={styles.container}>
        <div className={styles.quote_container}>
          <img src={decoration} alt="Decoration" />
        </div>

        <img src={avatar} alt="Zhao Cui" className={styles.avatar} />

        <div className={styles.quote_content}>
          <p className={styles.quote}>
            Creating an Online Presence is Hard. Jobly Makes it Easy for Recruiters to See you
          </p>
          <p className={styles.name}>Zhao Cui</p>
          <p className={styles.position}>Founder at Jobly.co</p>
          <h2>Everything you want to know in one place.</h2>
        </div>

        <CardList />
      </div>
    </section>
  );
};

export default Place;