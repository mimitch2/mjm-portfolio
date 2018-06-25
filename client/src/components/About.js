import React, {Component} from 'react'
import '../css/App.css'
import Fade from 'react-reveal/Fade';

class About extends Component {

  state = {
    show: false
  }

  componentDidMount=()=>{
    this.renderImage()
    setTimeout(() => {
      this.setState({show: true})
    }, 400);
  }

  renderImage = () => {
    if(!this.state.show){
      return <img src="img/IMG_0326_low.jpg" alt="Austin skyline" id="austin-image"/>
    }
    return <img src="img/IMG_0326.jpg" alt="Austin skyline" id="austin-image"/>
  }

  render(){
    return (
      <div className="about-main comp">
        <Fade>
          <div className="about-wrapper">
            <h1 className="hello-text">HELLO</h1>
            <div className="austin-image-div">
              
              {this.renderImage()}
            </div>
         
          </div>
        </Fade>
      </div>
    )
  }
}

export default About;