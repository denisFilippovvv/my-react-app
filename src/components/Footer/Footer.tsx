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
            <p>We support a pool of diverse young creatives and engineers.</p>
          </div>
          <div className={styles.footer_left_text2}>
            <p>© 2023 Jobly.co Copyright and All rights reserved.</p>
          </div>
        </div>
        <div className={styles.footer_right}>
          <div className={styles.footer_links}>
            <a href="#">Terms and Conditions</a> · <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;