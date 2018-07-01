import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../css/App.css'
import {Link} from "react-router-dom";


const linkNames = ["CODE", "DESIGN", "BLOG"]

class Nav extends Component{
  state = {
    selected: "nav-item selected",
    unselected: "nav-item"
  }

componentDidMount = () => {
  const path = window.location.pathname
  this.props.set(path)
  this.setClasses();
  document.getElementById(path).className = this.state.selected
}

 componentDidUpdate = (prevProps) => {
   if (prevProps.url !== this.props.url){
     this.setClasses();
     document.getElementById(this.props.url).className = this.state.selected
   }
 }

 handleClick = (e) => {
   this.props.set(e.target.id)
   this.setClasses();
   e.target.className = this.state.selected
 }

 setClasses = () => {
   const linkElements = root.querySelectorAll('nav a')
   linkElements.forEach(a => a.className = this.state.unselected)
 }


 render(){
   return ( 
     <div className="nav-main">
       <nav>
         <ul className="nav-list">
           <Link to="/" className={this.state.selected} id="/" onClick={(e) => this.handleClick(e)}>
           ABOUT 
           </Link>

           {linkNames.map((name, index) => <Link key={index} to={`/${name.toLowerCase()}`} className={this.state.unselected} id={`/${name.toLowerCase()}`} onClick={(e) => this.handleClick(e)}>
             {name} 
           </Link>)}

         </ul>
       </nav>
     </div>
   )
 }
}

Nav.propTypes = {
  url: PropTypes.string,
  set: PropTypes.func
}

export default Nav;



// CSS


// .nav-main {
//   margin-bottom: -34px;
//   width: max-content;
//   overflow-y: hidden;
// }


// .nav-list {
//  list-style-type: none;
//  display: flex; 
//  flex-direction: row;
// }

// .nav-item {
//   position: relative;
//   color: var(--headertext-color);
//   display: inline;
//   margin: 0px 20px 0px 20px;
//   cursor: pointer;
//   text-decoration: none;
// }

// .nav-item:before {
//   content: "";
//   position: absolute;
//   width: 100%;
//   height: 2px;
//   bottom: 0;
//   left: 0;
//   background-color: grey;
//   /* visibility: visable; */
//   -webkit-transform: scaleX(0);
//   transform: scaleX(0);
//   -webkit-transition: all 0.3s ease-in-out 0s;
//   transition: all 0.3s ease-in-out 0s;
// }

// .nav-item.selected:before {
//   visibility: visible;
//   -webkit-transform: scaleX(1.1);
//   transform: scaleX(1.1);
//   background-color: var(--orange-color);
  
// }

// .nav-item:hover:before {
//   color: var(--orange-color);
//   visibility: visible;
//   -webkit-transform: scaleX(1.1);
//   transform: scaleX(1.1);
// }
