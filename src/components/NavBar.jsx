import React, { useState } from 'react';
import '../css/NavBar.css'

const NavBar = ({ title }) => {

  const [active, setActive] = useState('nav__menu');
  const [burgerIcon, setBurgerIcon] = useState('nav__burger')

  const navToogle = () => {
    active === 'nav__menu'
      ? setActive('nav__menu nav__active')
      : setActive('nav__menu')

    burgerIcon === 'nav__burger'
      ? setBurgerIcon('nav__burger burger')
      : setBurgerIcon('nav__burger')
  }

  return (
    <nav className='nav'>
      <a className='nav__title' href="/">{title}</a>
      <ul className={active}>
        <li className='nav__menu-list'><a href="/">Inicio</a></li>
        <li className='nav__menu-list'><a href="#queHago">Que hago</a></li>
        <li className='nav__menu-list'><a href="#quienSoy">Quien soy</a></li>
        <li className='nav__menu-list'><a href="#batallas">Batallas</a></li>
        <li className='nav__menu-list'><a href="#contacto">Contacto</a></li>
      </ul>
      <div onClick={navToogle} className={burgerIcon}>
        <div className='nav__burger-line1'></div>
        <div className='nav__burger-line2'></div>
        <div className='nav__burger-line3'></div>
      </div>
    </nav>)
}

export default NavBar;