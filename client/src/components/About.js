import React, {Component} from 'react'
import ReduxIcon from './ReduxIcon';
import '../css/App.css'


class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }
    
  componentDidMount=()=>{
    // window.addEventListener("scroll", function (event) {
    //   const scroll = this.scrollY;
    //   console.log(scroll)
    // });
  }

  // componentWillUnmount = () => {

  // }

  renderImage = () => {
    // if(!this.state.show){
    //   return <img src="img/IMG_0326_low.jpg" alt="Austin skyline" id="austin-image"/>
    // }
    return <img src="img/IMG_0326.jpg" alt="Austin skyline" id="austin-image"/>
  }


  render(){
    return (
      <div className="about-main comp" id="main">
        <div className="about-wrapper" id="container">
          <div className="intro-text" >  
            <h1 className="hello-text" >HELLO</h1>
            <p className="intro-text-upper"> MY NAME IS MIKE. I DESIGN AND BUILD WEBSITES IN AUSTIN, TX</p>
          </div>
          <div className="image-div austin-image"></div>
          <div className="chevron-div"> <i className="far fa-chevron-double-down"></i></div>
          <div className="about-content content-one basic-flex-row">
            <div className ="content-text basic-flex-row">
              <div className ="content-text-inner basic-flex-col">
                <h2 className="bio-quote"></h2>
                <p className="bio-main">
                I spent nearly 20 years at Apple as a software qa engineer and manager. What I learned was that anything is possible, but what's more important is what is right for the end user. This ethos is embedded in my mind, and it's my guiding principle when designing and implementing web applications. 

                I specialize in React based frontend websites and applications, as well as backend services. 
                </p>
                <div className="skill-icon-div">
                  <i className="fab skill-icon fa-html5"></i>
                  <i className="fab skill-icon fa-js-square"></i>
                  <i className="fab skill-icon fa-css3-alt"></i>
                  <i className="fab skill-icon fa-node"></i>
                  <i className="fab skill-icon fa-react"></i>
                  <i className="fab skill-icon fa-git-square"></i>
                </div>
              </div> 
            </div>
          </div>

          {/* <div className="icon-div">
            <i className="fab skill-icon fa-html5"></i>
            <i className="fab skill-icon fa-js-square"></i>
            <i className="fab skill-icon fa-css3-alt"></i>
            <i className="fab skill-icon fa-node"></i>
            <i className="fab skill-icon fa-react"></i>
            <i className="fab skill-icon fa-git-square"></i>
          </div> */}

          {/* <div className="about-content content-two">
             Scroll Up and Down this page to see the parallax scrolling effect.
          </div> */}

        </div>

      </div>
    )
  }
}

export default About;