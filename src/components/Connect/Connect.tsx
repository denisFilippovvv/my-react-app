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
          <h3>Найди партнёров для проекта</h3>
          <p>Собери команду мечты — разработчиков, дизайнеров, аналитиков. Делитесь идеями, создавайте MVP, побеждайте в хакатонах и прокладывайте путь к успеху в цифровом мире.</p>
        </div>
      </div>
    </section>
  );
};

export default Connect;