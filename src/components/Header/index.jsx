import React from 'react';
import './styles.css';

import logo from './../../images/icons/logo.png'
import ThemeSwitcher from '../ThemeSwitcher';

function Header() {
  return (
    <header className='header'>
        <div className="container">
            <img className='logo' src={logo} alt='Logo.' />
            <ThemeSwitcher />
        </div>
    </header>
  )
}

export default Header;