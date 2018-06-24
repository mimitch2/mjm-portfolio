import React from 'react'
import '../css/App.css';
import Logo from './Logo'
// import PropTypes from 'prop-types'

const Header = (props) => {

  return (
    <div className="header-main">
      <Logo className="header-logo" />
    </div>
  )
}


// Header.propTypes = {
//   prop: PropTypes.array,
// }

export default Header;
