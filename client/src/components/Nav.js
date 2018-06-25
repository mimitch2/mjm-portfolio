import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import '../css/App.css'
import {Link} from "react-router-dom";


class Nav extends Component{
  state = {
    selected: "nav-item selected",
    unselected: "nav-item"
  }

 handleClick = (e) => {
   const linkElements = root.querySelectorAll('nav a')
   linkElements.forEach(a => a.className = this.state.unselected)
   e.target.className = this.state.selected
 }


 render(){
   return (
    
     <div className="nav-main">
       <nav>
         <ul className="nav-list">
       
           <Link to="/" className={this.state.selected} onClick={(e) => this.handleClick(e)}>
           ABOUT 
           </Link>
           <Link to="/code" className={this.state.unselected} onClick={(e) => this.handleClick(e)}>
           CODE  
           </Link>
           <Link to="/design" className={this.state.unselected} onClick={(e) => this.handleClick(e)}>
           DESIGN  
           </Link>
           <Link to="/blog" className={this.state.unselected} onClick={(e) => this.handleClick(e)}>
           BLOG  
           </Link>
         
      
         </ul>
       </nav>
     </div>

   )
 }
}

// Nav.propTypes = {
//   prop: PropTypes.array,
// }

export default Nav;
