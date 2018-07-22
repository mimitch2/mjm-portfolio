import React from 'react'
import '../css/App.css'



// this.classList.toggle("card-overlay")
// this.classList.contains("foo")

const addShow = (e) => {
  e.target.classList.add("show")
}
const removeShow = (e) => {
  e.target.classList.remove("show")
}

const SiteCard = (props) => {
    
  return (
    <div className="site-card">
      <div className={`card-overlay basic-flex-col`} onMouseEnter={addShow} onMouseLeave={removeShow}>
        <span className="overlay-header">
          {props.heading}
        </span>
        <span className="overlay-info">
          {props.info}
        </span>
        {props.icons}
      </div>
      {props.image}
    </div>
  )
}

export default SiteCard;