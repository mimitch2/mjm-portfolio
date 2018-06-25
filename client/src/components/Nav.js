import React from 'react'
// import PropTypes from 'prop-types'
import '../css/App.css'
import Diamond from './Diamond'

const Nav = () => {
  return (
    <div className="nav-main">
      <nav>

        <ul className="nav-list">
          <li className="nav-item">DESIGN</li>
          <span className="star"></span>
          <li className="nav-item">CODE</li>
        </ul>
  
      </nav>
    </div>
  )
}

// Nav.propTypes = {
//   prop: PropTypes.array,
// }

export default Nav;