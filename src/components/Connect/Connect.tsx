import React from 'react';
import styles from './Connect.module.css';
import img3 from '../../assets/images/img3.png';

const Connect = () => {
  return (
    <section className={styles.connect}>
      <div className={styles.container}>
        <div className={styles.connect_image}>
          <img 
            src={img3} 
            alt="Connect with Recruiter" 
          />
        </div>
        <div className={styles.connect_text}>
          <h3>Connect With Recruiter</h3>
          <p>Get instant access to a curated pool of top creative & tech talent actively seeking their next role. Find highly qualified job!</p>
        </div>
      </div>
    </section>
  );
};

export default Connect;