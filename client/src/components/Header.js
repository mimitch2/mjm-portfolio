import React from 'react'
import '../css/App.css';
import Logo from './Logo'
import Links from './Links';
import Nav from './Nav';
// import PropTypes from 'prop-types'

const Header = () => {

  return (
    <div className="header-main">
      <Logo />
      <Nav />
      <Links />
    </div>
  )
}

// Header.propTypes = {
//   prop: PropTypes.array,
// }

export default Header;
