import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import styles from './Place.module.css';
import decoration from '../../assets/images/dop.png';
import avatar from '../../assets/images/avatar.png';
import profil from '../../assets/images/professional-profil.png';
import portfolio from '../../assets/images/best-portfolio.jpg';
import resume from '../../assets/images/powerful-resume.jpg';

const Place = () => {
  return (
    <section className={styles.place}>
      <div className={styles.container}>
        {}
        <div className={styles.quote_container}>
          <img src={decoration} alt="Decoration" />
        </div>

        {}
        <img src={avatar} alt="Zhao Cui" className={styles.avatar} />

        {}
        <div className={styles.quote_content}>
          <p className={styles.quote}>
            Creating an Online Presence is Hard. Jobly Makes it Easy for Recruiters to See you
          </p>
          <p className={styles.name}>Zhao Cui</p>
          <p className={styles.position}>Founder at Jobly.co</p>
          <h2>Everything you want to know in one place.</h2>
        </div>

        {}
        <div className={`${styles.gradient} ${styles.swiper_container}`}>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={50}
            slidesPerView={1}
          >
            <SwiperSlide>
              <img src={profil} alt="Professional Profile" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={portfolio} alt="Best Portfolio" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={resume} alt="Powerful Resume" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Place;