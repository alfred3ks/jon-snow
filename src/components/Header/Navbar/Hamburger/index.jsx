import styles from './Hamburger.module.css';

const Hamburguer = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className={`${styles.burguer} ${isOpen ? styles.burgerAnimation : ''}`}
      onClick={toggleMenu}
    >
      <div className={styles.line1}></div>
      <div className={styles.line2}></div>
      <div className={styles.line3}></div>
    </div>
  );
};

export default Hamburguer;
