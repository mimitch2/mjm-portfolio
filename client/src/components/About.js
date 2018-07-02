import React, {Component} from 'react'
import '../css/App.css'
// import Fade from 'react-reveal/Fade';
// import scrollSnapPolyfill from 'css-scroll-snap-polyfill'

// window.addEventListener("scroll", function (event) {
//   var scroll = this.scrollY;
//   console.log(scroll)
// });

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
       
        <div className="about-wrapper" id="container" >

          <div className="intro-text" >  
            <h1 className="hello-text" >HENLO FREINDO</h1>
            <p className="intro-text-upper"> MY NAME IS MIKE. I DESIGN AND BUILD WEBSITES IN AUSTIN, TX</p>
            {/* <p className="intro-text-lower">SCROLL</p>   */}
          </div>
    
          <div className="image-div austin-image"></div>
          <div className="chevron-div"> <i className="far fa-chevron-double-down"></i></div>

          <div className="about-content content-one">
            <div className ="content-text content-one-text">
              <h1> SAY SOMETHING FUCKING AWESOME HERE</h1>
            </div>
          </div>

          <div className="image-div js-image"></div>

          <div className="about-content content-two">
             Scroll Up and Down this page to see the parallax scrolling effect.
          </div>

        </div>

      </div>
    )
  }
}

export default About;