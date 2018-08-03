import React from 'react'
import '../css/App.css'

const SiteCard = (props) => {

  // const addShow = (e) => {
  //   e.target.classList.add("show")
  // }
  
  // const removeShow = (e) => {
  //   e.target.classList.remove("show")
  // }
  
  const handleClick = (e) => {
    // const div = document.querySelectorAll(".card-overlay");
    // div.forEach(div => div.classList.remove("show"))
    // setTimeout(() => {
    window.open(props.url)
    // }, 400);
  }
  // onMouseOver={addShow} onMouseLeave={removeShow}
  return (
    <div className="site-card" >
      <div className="card-overlay basic-flex-col"  >
        <i className="fas fa-arrow-alt-circle-right" onClick={handleClick}></i> 
      </div>
   
      <img src={props.image} alt="website" className="card-image"/>    
      <div className="overlay-heading">
        {props.heading}
      </div>
      <div className="overlay-info">
        {/* {props.info} */}
        {props.icons}
      </div>
    </div>
  )
}

export default SiteCard;