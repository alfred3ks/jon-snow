import { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className={styles.nav}>
      <ul className={`${styles.navMenu} ${isOpen ? styles.navActive : ''}`}>
        <li className={styles.list}>
          <a href="/">Inicio</a>
        </li>
        <li className={styles.list}>
          <a href="#queHago">Que hago</a>
        </li>
        <li className={styles.list}>
          <a href="#quienSoy">Quien soy</a>
        </li>
        <li className={styles.list}>
          <a href="#batallas">Batallas</a>
        </li>
        <li className={styles.list}>
          <a href="#contacto">Contacto</a>
        </li>
      </ul>

      {/* Boton hamburguesa */}
      <div
        className={`${styles.burguer} ${isOpen ? styles.burgerAnimation : ''}`}
        onClick={toggleMenu}
      >
        <div className={styles.line1}></div>
        <div className={styles.line2}></div>
        <div className={styles.line3}></div>
      </div>
    </nav>
  );
};

export default Navbar;
