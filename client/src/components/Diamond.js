import React from 'react'
import '../css/App.css'

const Diamond = (props) => {
  return (
    <div className="diamond-main">
      <svg width="8px" height="14px" viewBox="0 0 50 92" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs></defs>
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Group" fill="#1C3F94">
            <polygon id="Triangle" points="25 0 50 46 0 46"></polygon>
            <polygon id="Triangle" transform="translate(25.000000, 69.000000) scale(-1, -1) translate(-25.000000, -69.000000) " points="25 46 50 92 0 92"></polygon>
          </g>
        </g>
      </svg></div>
  )
}

export default Diamond;