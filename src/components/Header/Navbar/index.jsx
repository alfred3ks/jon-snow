import { useState } from 'react';
import styles from './Navbar.module.css';
import Hamburger from './Hamburger';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closedMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className={styles.nav}>
      <ul className={`${styles.navMenu} ${isOpen ? styles.navActive : ''}`}>
        <li className={styles.list}>
          <a href="/">Inicio</a>
        </li>
        <li className={styles.list} onClick={closedMenu}>
          <a href="#que-hago">Que hago</a>
        </li>
        <li className={styles.list} onClick={closedMenu}>
          <a href="#quien-soy">Quien soy</a>
        </li>
        <li className={styles.list} onClick={closedMenu}>
          <a href="#batallas">Batallas</a>
        </li>
        <li className={styles.list} onClick={closedMenu}>
          <a href="#contacto">Contacto</a>
        </li>
      </ul>

      {/* Boton hamburger */}
      <Hamburger isOpen={isOpen} toggleMenu={toggleMenu} />
    </nav>
  );
};

export default Navbar;
