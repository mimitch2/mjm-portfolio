import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import '../css/App.css'



class Nav extends Component{
  state = {
    selected: "nav-item selected",
    unselected: "nav-item"
  }

 handleClick = (e) => {
   const liElements = document.querySelectorAll('li')
   liElements.forEach(li => li.className = this.state.unselected)
   e.target.className = this.state.selected
 }


 render(){
   return (
     <div className="nav-main">
       <nav>
         <ul className="nav-list">
           <li className={this.state.selected} onClick={(e) => this.handleClick(e)}>ABOUT</li>
           <li className={this.state.unselected} onClick={(e) => this.handleClick(e)}>CODE</li>
           <li className={this.state.unselected} onClick={(e) => this.handleClick(e)}>DESIGN</li>
           <li className={this.state.unselected} onClick={(e) => this.handleClick(e)}>BLOG</li>
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
