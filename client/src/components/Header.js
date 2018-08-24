import React from 'react'
import '../css/App.css';
import Logo from '../containers/LogoContainer'
import Links from './Links';
import Nav from '../containers/NavContainer';

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
