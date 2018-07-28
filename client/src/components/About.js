import React, {Component} from 'react'
// import ReduxIcon from './ReduxIcon';
import '../css/App.css'
import icons from './WeatherIcons.js'


class About extends Component {

  constructor(props) {
    super(props)
    this.state = {
      temp: "",
      icon: ""
    }
  }

    componentDidMount = () => {
      this.getTemp();
      // setInterval(() => {
      //   this.getTemp();
      // }, 500000)
    
    }

    getTemp = () => {
      fetch('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/fa792c1f87ce72cb121f485b11488cd4/30.2672,-97.7431').then(function(response) {
        return response.json();
      })
        .then(data => this.setState({temp: Math.floor(data.currently.temperature).toString(), 
          icon: data.currently.icon}))
    }

    returnWeatherIcon = () => {
      if (this.state.icon === "partly-cloudy-day") {
        return icons.partlyCloudyDay
      } else if (this.state.icon === "partly-cloudy-night") {
        return icons.partlyCloudyNight
      }else if (this.state.icon === "clear-night") {
        return icons.moonClear
      } else if (this.state.icon === "clear-day") {
        return icons.sunny
      } else if (this.state.icon === "cloudy") {
        return icons.cloudy
      } else if (this.state.icon === "rain") {
        return icons.rain
      } else {
        return null
      }
    }
   
    render(){
      return (
        <div className="about-main comp" id="main">
          <div className="about-wrapper" id="container">
            <div className="intro-text" >  
              <h1 className="hello-text" >HELLO</h1>
              <p className="intro-text-upper"> MY NAME IS MIKE. I DESIGN AND BUILD WEBSITES IN AUSTIN, TX</p>
            </div>
            <div className="image-div austin-image-div">
              <div className="temp-div"> 
                <span>Austin: {this.state.temp}º</span> &nbsp;&nbsp;<span className="weather-icon">{this.returnWeatherIcon()}</span> 
              </div>
            </div>
            <div className="chevron-div"> <i className="far fa-chevron-double-down"></i></div>
            <div className="about-content content-one basic-flex-row">
              <div className ="content-text basic-flex-row">
                <div className ="content-text-inner">
                  {/* <h2 className="bio-quote"></h2> */}
                  <img src="/img/headshot.jpg" alt="Headshot" className="headshot"/>
                  <span className="bio-main">
                I spent nearly 20 years at Apple as a software qa engineer and manager. What I learned was that while anything is possible, what's right for the user is what matters most. This ethos is embedded in my mind, and it's my guiding principle when designing and implementing web applications. 

                I specialize in React based  
                  </span>
                </div> 
              </div>
            </div>
          </div>
        </div>
      )
    }
}

export default About;