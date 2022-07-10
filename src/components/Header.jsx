import React from 'react';
import '../css/Header.css'

export const Header = () => {
  return (
    <header className='header'>
      <h1 className='header__title'>Jon Snow</h1>
      <nav className='header__nav'>
        <ul className='nav__list'>
          <li><a href="/">Inicio</a></li>
          <li><a href="/">Que hago</a></li>
          <li><a href="/">Quien soy</a></li>
          <li><a href="/">Batallas</a></li>
          <li><a href="/">Contacto</a></li>
        </ul>
      </nav>
    </header>);
}

