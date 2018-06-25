import React, {Component} from 'react'
import '../css/App.css'
import Fade from 'react-reveal/Fade';

class About extends Component {
  render(){
    return (
    
      <div className="about-main comp">
        <Fade>
          <div className="about-image-div">
            <img src="img/IMG_0326.jpg" alt="Austin skyline" id="austin-image"/>
          </div>
        </Fade>
      </div>
    
    )
  }
}

export default About;