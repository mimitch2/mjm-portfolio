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

          <div className="intro-text" >  
            <h1 className="hello-text" >HELLO</h1>
            <p className="intro-text-upper"> MY NAME IS MIKE. I DESIGN AND BUILD WEBSITES IN AUSTIN, TX</p>
          </div>

         
          <div className="chevron-div basic-flex-row"> 
            <i className="far fa-chevron-double-down"></i>
          </div>
          <div className ="headshot-div">
            <img src="/img/headshot.jpg" alt="Headshot" className="headshot"/>
          </div>
          <div className ="content-text">
           
            <p className="bio-main">
        
              <span className="bio-lines"> I spent 20 years at Apple as a qa engineer and manager working on popular comsumer facing software. <br />
              </span>
              <span className="bio-lines">    My time there embedded several core principles in my mind that are the basis for how I approach  <br /> 
              </span>
              <span className="bio-lines">
               designing and building web applications.  <br /> <br />
              </span>
              <span className="bio-lines"> I beleive that intuitive, effortless user experiences should obfuscate the underlying technology.
              </span>
   

   
              {/*  
    <p className="about-me-text">I specialize full-stack web pages utilizing MERN - MongoDB, Express Server, React.js and Node.js.  I can design and build anything from simple blogs to fully interactive business applications - 
      <a href="mailto:<mimitch@mac.com>" className="bio-email-link"> email </a>me to discuss your project!</p> */}
            </p>
          </div>



          <div className="temp-div"> 
            <span>Austin: {this.props.temp}</span> &nbsp;&nbsp; <span className="weather-icon">{this.returnWeatherIcon()}</span> 
          </div> 

          {/* </div> */}
            
        
        
          
          

          {/* <div className="about-content content-one basic-flex-row">      
          </div> */}
          
            
        </div>
      )
    }
}

export default About;