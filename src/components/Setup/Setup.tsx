import styles from './Setup.module.css';
import img4 from '../../assets/images/img4.png';

const Setup = () => {
  return (
    <section className={styles.setup}>
      <div className={styles.text_container}>
        <h2>Set up your profile.<br />Let jobs find you.</h2>
        <button className={styles.primary_button}>Join Now</button>
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