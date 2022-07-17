import React from 'react';

const NavBar = ({ title }) => {
  return (
    <nav className='nav'>
      <h1 className='nav__title'>
        <a href="/">{title}</a>
      </h1>
      <ul className='nav__menu'>
        <li className='nav__menu-list'><a href="/">Inicio</a></li>
        <li className='nav__menu-list'><a href="#queHago">Que hago</a></li>
        <li className='nav__menu-list'><a href="#quienSoy">Quien soy</a></li>
        <li className='nav__menu-list'><a href="batallas">Batallas</a></li>
        <li className='nav__menu-list'><a href="contacto">Contacto</a></li>
      </ul>
      <div className='nav__burguer'>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>);
}

export default NavBar;