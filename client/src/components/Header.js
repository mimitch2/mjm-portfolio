import React from 'react'
import '../css/App.css';
import Logo from '../containers/LogoContainer'
import Links from './Links';
import Nav from '../containers/NavContainer';
// import PropTypes from 'prop-types'

const Header = (props) => {

  return (
    <header className={props.headerColor}>
      <Logo />
      <Nav />
      <Links />
    </header>
  )
}

// Header.propTypes = {
//   prop: PropTypes.array,
// }

export default Header;
