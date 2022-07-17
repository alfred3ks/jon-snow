import React from 'react';
import '../css/Header.css'
import NavBar from './NavBar';

export const Header = () => {

  const title = 'Jon Snow';

  return (
    <header className=''>
      <NavBar title={title} />
    </header>);
}

