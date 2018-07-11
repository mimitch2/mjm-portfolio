import React, {Component} from 'react'
import ReduxIcon from './ReduxIcon';
import '../css/App.css'

window.addEventListener("scroll", function (event) {
  var scroll = this.scrollY;
  console.log(scroll)
});

// window.addEventListener('resize', scroll, true);
// window.addEventListener('scroll', scroll, true)
// const viewerHeight = () => {
//   return window.innerHeight - 80
// }

// function scroll(){
//   console.log("scroll");
//   if (window.pageYOffset > viewerHeight() / 1.5 && window.pageYOffset < viewerHeight() + 100) {
//     window.removeEventListener('scroll', scroll, true)
//     setTimeout(() => {
//       window.scroll({
//         top: viewerHeight(), 
//         left: 0, 
//         behavior: 'smooth' 
//       });
//     }, 100);
//     setTimeout(() => {
//       window.addEventListener('scroll', scroll, true)
//     }, 400);
//   }
// }


class About extends Component {
  state = {
    show: false
  }

  
  componentDidMount=()=>{
    // this.renderImage()
    // setTimeout(() => {
    //   this.setState({show: true})
    // }, 100);
    // scrollSnapPolyfill()

  }

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
            {/* <p className="intro-text-lower">SCROLL</p>   */}
          </div>
    
          <div className="image-div austin-image"></div>
          <div className="chevron-div"> <i className="far fa-chevron-double-down"></i></div>

          <div className="about-content content-one">
            <div className ="content-text content-one-text">
              <div className ="content-text-inner basic-flex">
                <h2 className="bio-quote"> "BEFORE I ASK MYSELF IF I CAN DO IT, I ASK MYSELF SHOULD I DO IT"</h2>
                <p className="bio-main">
                I spent nearly 20 years at Apple as a software qa engineer and manager. What I learned was that anything is possible, but what's more important is what is right for the end user. This ethos is embedded in my mind, and it's my guiding principle when designing and implementing web applications. 

                I specialize in React based frontend websites and applications, as well as backend services. 
                </p>
                <div>
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