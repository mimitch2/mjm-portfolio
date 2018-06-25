import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import '../css/App.css'
import {Link} from "react-router-dom";


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
   if (prevProps.url !== this.props.url && this.props.url === "/"){
     this.setClasses();
     document.getElementById("/").className = this.state.selected
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
           <Link to="/code" className={this.state.unselected} id="/code" onClick={(e) => this.handleClick(e)}>
           CODE  
           </Link>
           <Link to="/design" className={this.state.unselected} id="/design" onClick={(e) => this.handleClick(e)}>
           DESIGN  
           </Link>
           <Link to="/blog" className={this.state.unselected} id="/blog" onClick={(e) => this.handleClick(e)}>
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
