import React from 'react'
import '../css/App.css'


const Footer = (props) => {  
  return (
    <footer className={`footer-main ${props.className}`}>
      <span className="footer-credits footer-item basic-flex-row">
        {props.credits}
        &nbsp;
        <a href="https://reactjs.org/" className="react-link" target="_blank" rel='noopener noreferrer'>
          {/* {props.icon} */}
          <img src="http://www.super-script.us/media/2015-08-05-react-resources/react-logo.png" alt="React logo" className="react-logo"/>
        </a>
        &nbsp;
        &nbsp;
        {props.plus}
        &nbsp;
        &nbsp;
        {props.butter}
      </span>

      <span className="footer-copywrite footer-item">
        {props.copyWrite}
      </span>
      
    </footer>
  )
}

export default Footer;