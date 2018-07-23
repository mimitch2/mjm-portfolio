import React from 'react'
import '../css/App.css'



const SiteCard = (props) => {

  const addShow = (e) => {
    e.target.classList.add("show")
  }
  
  const removeShow = (e) => {
    e.target.classList.remove("show")
  }
  
  const handleClick = (e) => {
    const div = document.querySelectorAll(".card-overlay");
    div.forEach(div => div.classList.remove("show"))
    setTimeout(() => {
      window.open(props.url)
    }, 400);
  }

  return (
    <div className="site-card" onMouseEnter={addShow}>
      <div className="card-overlay basic-flex-col"  
        onMouseLeave={removeShow} onClick={handleClick}>
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