import styles from './Candidates.module.css';
import img1 from '../../assets/images/img1.png';

const Candidates = () => {
  return (
    <section className={styles.Candidates}>
      <div className={styles.Candidates_content}>
        <h1>Candidates with Creative</h1>
        <h1>& Engineering Backgrounds</h1>  
        <p>This is the place to show yourself and land entry level jobs at cutting-edge companies. Launch your career here.</p>
        <button className={styles.can}>Join Now</button>
        <div className={styles.minitext}><p>Looking for candidate's? Hire now</p></div>
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