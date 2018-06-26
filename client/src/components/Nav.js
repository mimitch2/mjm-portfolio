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
   //  const lastSlash = e.target.href.lastIndexOf("/")
   //  const path = e.target.href.substring(lastSlash)
   //  console.log(path);
   
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
           {linkNames.map(name => <Link to={`/${name.toLowerCase()}`} className={this.state.selected} id={`/${name.toLowerCase()}`} onClick={(e) => this.handleClick(e)}>
             {name} 
           </Link>)}
           {/* <Link to="/code" className={this.state.unselected} id="/code" onClick={(e) => this.handleClick(e)}>
           CODE  
           </Link>
           <Link to="/design" className={this.state.unselected} id="/design" onClick={(e) => this.handleClick(e)}>
           DESIGN  
           </Link>
           <Link to="/blog" className={this.state.unselected} id="/blog" onClick={(e) => this.handleClick(e)}>
           BLOG  
           </Link> */}
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
