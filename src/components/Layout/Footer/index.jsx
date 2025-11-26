import data from '../../../data/cv.json';
import styles from './Footer.module.css';

const Footer = () => {
  const dateNow = new Date();
  const now = dateNow.getFullYear();
  return (
    <footer className={styles.footer}>
      <p>
        Copyright ©{now} - {data.name} ❤️
      </p>
    </footer>
  );
};

export default Footer;
