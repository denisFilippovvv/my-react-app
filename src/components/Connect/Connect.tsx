import React from 'react';
import styles from './Connect.module.css';
import img3 from '../../assets/images/img3.png';

const Connect = () => {
  return (
    <section className={styles.connect}>
      <div className={styles.container}>
        <img 
          src={img3} 
          alt="Connect with Recruiter" 
          className={styles.img3} 
        />
        <div>
          <h3>Connect With Recruiter</h3>
          <p>Get instant access to a curated pool of top creative...</p>
        </div>
      </div>
    </section>
  );
};

export default Connect;