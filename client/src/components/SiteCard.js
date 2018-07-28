import React from 'react'
import '../css/App.css'

// const shapes = {

//   polygon: 
//   <svg width="288px" height="296px" viewBox="0 0 288 296" version="1.1" xmlns="http://www.w3.org/2000/svg">
//     <desc>Created with Sketch.</desc>
//     <defs></defs>
//     <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
//       <path d="M166.199272,5.75128396 L262.959489,57.6017422 C278.229681,65.7845106 287.760217,81.7042467 287.760217,99.0286936 L287.760217,147.92773 L287.760217,196.826767 C287.760217,214.151214 278.229681,230.07095 262.959489,238.253718 L166.199272,290.104177 C152.332487,297.534908 135.667513,297.534908 121.800728,290.104177 L25.0405106,238.253718 C9.77031869,230.07095 0.239782972,214.151214 0.239782972,196.826767 L0.239782972,99.0286936 C0.239782972,81.7042467 9.77031869,65.7845106 25.0405106,57.6017422 L121.800728,5.75128396 C135.667513,-1.67944746 152.332487,-1.67944746 166.199272,5.75128396 Z" id="Polygon" fill="#DC5620"></path>
//     </g>
//   </svg>
// }

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
    <div className="site-card basic-flex-row" onClick={handleClick}>
      <div className="card-overlay basic-flex-col"  >
        
        <div className="overlay-main basic-flex-col">
          
          <div className="overlay-heading">
            {props.heading}
          </div>
          <div className="overlay-info">
            {props.info}
            {props.icons}
          </div>
        </div>

      </div>
      <img src={props.image} alt="website" className="card-image"/>    
    </div>
  )
}

export default SiteCard;