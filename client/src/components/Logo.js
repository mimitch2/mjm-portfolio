import React from 'react';
import '../css/App.css';
import {Link} from "react-router-dom";




const Logo = (props) => {

  const handleClick = () =>{
    props.set("/")
  }
  return (
    <Link to="/" className="logo-link" onClick={()=>handleClick()}>
      <div className="logo-div">
        <span className="logo-text">MJM</span>
        <span className="web-design-text">DEV / DESIGN</span>
      </div>
    </Link>
  );
}

export default Logo;


//************ css *************/

// .logo-text {
//   color: var(--headertext-color);
//   font-weight: 700;
//   font-size: 2.5em;
//   margin-top: -5px;
// }

// .web-design-text {
//   color: var(--headertext-color);
//   font-size: .80em;
//   margin-top: -12px;
//   margin-left: 2px;
// }

// .logo-div {
//   margin: 4px 0px 4px 10px;
//   display: flex;
//   flex-direction: column;
//   /* background-color: var(--orange-color); */
//   /* border-radius: 8px; */
//   padding: 0px 3px 0px 3px;
//   /* border: 3px solid var(--headertext-color); */
// }