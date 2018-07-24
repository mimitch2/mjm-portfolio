import React, {Component} from 'react'
// import ReduxIcon from './ReduxIcon';
import '../css/App.css'

let newTemp ="";
let clouds = ""
class About extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      temp: "",
      icon: ""
    }
  }


    componentDidMount = () => {
      fetch('https://api.darksky.net/forecast/fa792c1f87ce72cb121f485b11488cd4/30.2672,-97.7431').then(function(response) {
        return response.json();
      })
        .then(data => this.setState({temp: Math.floor(data.currently.temperature).toString(), 
          icon: data.currently.icon}))
    }

    returnWeatherIcon = () => {
      if (this.state.icon.includes("cloudy")) {
        return <i className="fas fa-cloud"></i>
      } else if (this.state.icon.includes("clear")) {
        return <i className="fas fa-sun"></i>
      } else if (this.state.icon.includes("rain")) {
        return <i className="fas fa-umbrella"></i>
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
              <div className="temp-div"> <span>Austin: {this.state.temp}º {this.returnWeatherIcon()}</span> </div>
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
                  {/* <div className="skill-icon-div">
                    <i className="fab skill-icon fa-html5"></i>
                    <i className="fab skill-icon fa-js-square"></i>
                    <i className="fab skill-icon fa-css3-alt"></i>
                    <i className="fab skill-icon fa-node"></i>
                    <i className="fab skill-icon fa-react"></i>
                    <i className="fab skill-icon fa-git-square"></i>
                  </div> */}
                </div> 
              </div>
            </div>

            {/* <div className="about-content content-two">
             Scroll Up and Down this page to see the parallax scrolling effect.
            </div> */}

          </div>

        </div>
      )
    }
}

export default About;