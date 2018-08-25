import React, {Component} from 'react'
// import ReduxIcon from './ReduxIcon';
import '../css/App.css'
import icons from './svgIcons.js'
// import Footer from './Footer'
import Header from './Header'



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
        // <div className="about-wrapper">
        <div className="austin-image-div">
          <Header headerColor="header-main trans"/>
          <div className="about-overlay">
            <div className="intro-text" >  
              <h1 className="hello-text" >HELLO</h1>
              <p className="intro-text-upper"> MY NAME IS MIKE. I DESIGN AND BUILD WEBSITES IN AUSTIN, TX</p>
            </div>

         
            <div className="chevron-div basic-flex-row"> 
              <i className="far fa-chevron-double-down"></i>
            </div>
      
            <div className ="content-text">

              <div className ="headshot-div">
                <img src="/img/headshot.jpg" alt="Headshot" className="headshot"/>
              </div>
              <p className="bio-main">
                <span className="bio-lines"> I spent 20 years at Apple as a qa engineer and manager working 
                on wildly popular consumer-facing software. My time there embedded several core principles in my mind that are the basis for how I approach designing and building web applications. 
                I beleive that intuitive, effortless user experiences should obfuscate the underlying technology.<br />
                </span>
                {/* <span className="bio-lines">  <br />
                </span>
                <span className="bio-lines">      <br /> 
                </span>
                <span className="bio-lines">
                
                  <br /> <br />
                </span>
                <span className="bio-lines"> 
                </span> */}
              </p>
              
            </div>



            <div className="temp-div"> 
              <span>Austin: {this.props.temp}</span> &nbsp;&nbsp; <span className="weather-icon">{this.returnWeatherIcon()}</span> 
            </div> 

          </div>
        </div>
      )
    }
}

export default About;