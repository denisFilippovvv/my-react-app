import { Link } from 'react-router-dom'; 
import styles from './Candidates.module.css';
import img1 from '../../assets/images/img1.png';

const Candidates = () => {
  return (
    <section className={styles.Candidates}>
      <div className={styles.Candidates_content}>
        <h1>Собери команду. Решай вызовы</h1>
        <h1>& Расти с каждым хакатоном</h1>  
        <p>Участвуй в хакатонах по программированию, дизайну и стартап-проектам. Прокачай портфолио, найди команду и прокладывай карьеру в цифровом мире.</p>
        <Link to="/join-now" className={styles.can}>
          Присоединиться
        </Link>
        <div className={styles.minitext}><p>Уже организуете хакатон? Добавить мероприятие</p></div>
        <div className={styles.gradient}>
          <img
            src={img1}
            alt="Candidates with Creative and Engineering Backgrounds"
            className={styles.img1}
          />
        </div>
      </div>
    </section>
  );
};

export default Candidates;