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
        <div className="about-wrapper" id="container">
          <Header headerColor="header-main trans"/>
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
                <h2 className="bio-quote">"I beleive that intuitive, effortless user experiences should obfuscate the underlying technology."</h2>
                 

                <div className="bio-main">
                  <p className="bio-text"> I spent nearly 20 years at Apple as a software qa engineer and manager. My time there embedded several core principles in my mind that are the basis for how I approach designing and building web applications. I beleive that intuitive, effortless user experiences should obfuscate the underlying technology. I make apps to impress people, not developers. </p>
               
                  <p className="bio-text">I specialize full-stack web pages utilizing MERN - MongoDB, Express Server, React.js and Node.js.  I can design and build anything from simple blogs to fully interactive business applications. 
                    <a href="mailto:<mimitch@mac.com>" className="bio-email-link"> Email </a>me to discuss your project!</p>
                </div>

              </div> 
               
            </div>
                   
          </div>
            
        </div>
      )
    }
}

export default About;