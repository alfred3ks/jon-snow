import { useState } from 'react';
import styles from './Navbar.module.css';
import Hamburger from './Hamburger';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closedMenu = () => setIsOpen((prev) => !prev);
  const [activeLink, setActiveLink] = useState('inicio');

  return (
    <nav className={styles.nav}>
      <ul className={`${styles.navMenu} ${isOpen ? styles.navActive : ''}`}>
        <li
          className={`${styles.list} ${
            activeLink === 'inicio' ? styles.activeLink : ''
          }`}
          onClick={() => setActiveLink('inicio')}
        >
          <a href="/">Inicio</a>
        </li>
        <li
          className={`${styles.list} ${
            activeLink === 'que-hago' ? styles.activeLink : ''
          }`}
          onClick={() => {
            setActiveLink('que-hago');
            closedMenu();
          }}
        >
          <a href="#que-hago">Que hago</a>
        </li>
        <li
          className={`${styles.list} ${
            activeLink === 'quien-soy' ? styles.activeLink : ''
          }`}
          onClick={() => {
            closedMenu();
            setActiveLink('quien-soy');
          }}
        >
          <a href="#quien-soy">Quien soy</a>
        </li>
        <li
          className={`${styles.list} ${
            activeLink === 'batallas' ? styles.activeLink : ''
          }`}
          onClick={() => {
            closedMenu();
            setActiveLink('batallas');
          }}
        >
          <a href="#batallas">Batallas</a>
        </li>
        <li
          className={`${styles.list} ${
            activeLink === 'contacto' ? styles.activeLink : ''
          }`}
          onClick={() => {
            closedMenu();
            setActiveLink('contacto');
          }}
        >
          <a href="#contacto">Contacto</a>
        </li>
      </ul>

      {/* Boton hamburger */}
      <Hamburger isOpen={isOpen} toggleMenu={toggleMenu} />
    </nav>
  );
};

export default Navbar;
