import React from 'react'
import '../css/App.css'

const SiteCard = (props) => {
  
  const handleClick = (e) => {
    window.open(props.url)
  }
  
  return (
    <div className="site-card">
    
      <div className="card-overlay basic-flex-col" onClick={handleClick}>
        <div className="overlay-heading">
          {props.heading}
        </div>
        <div className="overlay-info">
          {props.info}
          {props.icons}
        </div>
      </div>
   
      <img src={props.image} alt="website" className="card-image"/>    
 
    </div>
  )
}

export default SiteCard;