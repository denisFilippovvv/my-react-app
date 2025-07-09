import { Link } from 'react-router-dom';
import styles from './Setup.module.css';
import img4 from '../../assets/images/img4.png';

const Setup = () => {
  return (
    <section className={styles.setup}>
      <div className={styles.text_container}>
        <h2>Участвуй в хакатонах.<br />Получай <span>предложения.</span></h2>
        <Link 
          to="/join-now" 
          className={styles.primary_button}
        >
          Присоединиться
        </Link>
      </div>
      <div className={styles.image_container}>
        <img 
          src={img4} 
          alt="People working in an office" 
        />
      </div>
    </section>
  );
};

export default Setup;