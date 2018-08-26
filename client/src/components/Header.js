import React from 'react'
import '../css/App.css';
import Logo from './Logo'
import Links from './Links';
import Nav from './Nav';

const Header = (props) => {

  return (
    <header className={props.headerColor}>
      <Logo />
      <Nav />
      <Links />
    </header>
  )
}


export default Header;
