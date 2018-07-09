import React from 'react'
import {Link} from "react-router-dom";
import '../css/App.css'

const Oops = (props) => {

  const handleClick = () => {
    props.set("/")
  }

  return (
    <div className="bad-url basic-flex">
      <div style={{width:"100%", textAlign: "center"}}>
        <i className="fal fa-grimace" style={{fontSize: "130px"}}></i>
      </div>
      <div style={{width:"100%", textAlign: "center"}}>
        <h1>
          Oops! There isn't anything here! Click here: <Link to="/" onClick={() => handleClick()}>mikejmitchell.com</Link>
        </h1>          
      </div>
    </div>
  )
}

export default Oops;