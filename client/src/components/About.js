import React, {Component} from 'react'
import '../css/App.css'
import Fade from 'react-reveal/Fade';

class About extends Component {

  state = {
    show: true
  }

  componentDidMount=()=>{
    this.renderImage()
    // setTimeout(() => {
    //   this.setState({show: true})
    // }, 1000);
  }

  renderImage = () => {
    return <img src="img/IMG_0326.jpg" alt="Austin skyline" id="austin-image"/>
  }

  render(){
    if (this.state.show){
      return (
        <div className="about-main comp">
          <Fade>
            <div className="about-image-div">
              {this.renderImage()}
            </div>
          </Fade>
        </div>
      )
    }
    return (
      <div> </div>
    )


  }
}

export default About;