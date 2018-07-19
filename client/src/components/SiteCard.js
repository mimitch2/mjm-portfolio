import React from 'react'
import '../css/App.css'

const SiteCard = (props) => {
  return (
   
    <div className="site-card">
      
      <div className="card-overlay"></div>

      {props.image}
    
    </div>
  )
}

export default SiteCard;