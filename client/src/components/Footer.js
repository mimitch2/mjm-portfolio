import React from 'react'
import '../css/App.css'


const Footer = (props) => {  
  return (
    <div className="footer-main" id={props.id}>
      <span className="footer-credits footer-item">{props.credits}</span>
      <span className="footer-copywrite footer-item">{props.copyWrite}</span>
    </div>
  )
}

export default Footer;