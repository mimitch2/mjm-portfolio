import React from 'react';
import '../css/App.css'

const Links = () =>  {
  return (<div className="links-main">
    <a href="https://github.com/mimitch2" target="_blank" rel='noopener noreferrer'><i className="fab fa-github-square links-icon" ></i></a>

    <a href="https://www.linkedin.com/in/mike-mitchell-706a9117/"target="_blank" rel='noopener noreferrer'><i className="fab fa-linkedin links-icon"></i></a>

    <a href="mailto:<mimitch@mac.com>?subject=I'm interested in your services!"><i className="fas fa-envelope-square links-icon"></i></a>
  </div>);
}

export default Links;