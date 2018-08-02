import React, {Component} from 'react'
// import ReduxIcon from './ReduxIcon';
import '../css/App.css'
import icons from './svgIcons.js'


class About extends Component {


    returnWeatherIcon = () => {
      if (this.props.icon === "partly-cloudy-day") {
        return icons.partlyCloudyDay
      } else if (this.props.icon === "partly-cloudy-night") {
        return icons.partlyCloudyNight
      }else if (this.props.icon === "clear-night") {
        return icons.moonClear
      } else if (this.props.icon === "clear-day") {
        return icons.sunny
      } else if (this.props.icon === "cloudy") {
        return icons.cloudy
      } else if (this.props.icon === "rain") {
        return icons.rain
      } else {
        return null
      }
    }
   
    render(){            
      return (
        <div className="about-main" id="main">
          <div className="about-wrapper" id="container">
            <div className="intro-text" >  
              <h1 className="hello-text" >HELLO</h1>
              <p className="intro-text-upper"> MY NAME IS MIKE. I DESIGN AND BUILD WEBSITES IN AUSTIN, TX</p>
            </div>
            <div className="image-div austin-image-div">
              <div className="temp-div"> 
                <span>Austin: {this.props.temp}</span> &nbsp;&nbsp; <span className="weather-icon">{this.returnWeatherIcon()}</span> 
              </div>
            </div>
            <div className="chevron-div"> <i className="far fa-chevron-double-down"></i></div>
            <div className="about-content content-one basic-flex-row">
              <div className ="content-text basic-flex-row">
                <div className ="content-text-inner">
                  <img src="/img/headshot.jpg" alt="Headshot" className="headshot"/>
                  <div className="bio-main">
                    <p className="bio-text"> I spent nearly 20 years at Apple as a software qa engineer and manager. My time there embedded several core principles in my mind that are the basis for how I approach designing and implementing web applications. Intuitive, effortless user experiences should obfuscate the underlying technology. </p>
               
                    <p className="about-me-text">I specialize in React SPA's and am experrieced in full MERN stack.  I am obsessed with </p>

                
                  </div>
                </div> 
              </div>
            </div>
          </div>
        </div>
      )
    }
}

export default About;