import styles from './Footer.module.css';
import logo from '../../assets/images/logo2.png';

const Footer = () => {
  return (
    <footer className={styles.page_footer}>
      <div className={styles.container}>
        <div className={styles.footer_left}>
          <div className={styles.logo_footer}>
            <img src={logo} alt="Jobly Logo" />
          </div>
          <div className={styles.footer_left_text1}>
            <p>Мы объединяем разработчиков, дизайнеров, студентов и стартаперов, чтобы решать вызовы будущего вместе.</p>
          </div>
          <div className={styles.footer_left_text2}>
            <p>© 2025 HackFlow. Все права защищены.</p>
          </div>
        </div>
        <div className={styles.footer_right}>
          <div className={styles.footer_links}>
            <a href="#">Условия участия</a> · <a href="#">Политика конфиденциальности</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;