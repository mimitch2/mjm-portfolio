import React from 'react'
import '../css/App.css'



// this.classList.toggle("card-overlay")
// this.classList.contains("foo")

const SiteCard = (props) => {
    
  return (
    <div className="site-card">
      <div className={`card-overlay ${props.id} basic-flex-row`}>
      </div>
      {props.image}
    </div>
  )
}

export default SiteCard;