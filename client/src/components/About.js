import React, { Component } from 'react';
import '../css/App.css';
import icons from './svgIcons.js';
import Footer from './Footer';
import Header from './Header';

class About extends Component {
  componentDidMount = () => {
    document.addEventListener('scroll', this.scroll);
  };

  componentWillUnmount = () => {
    document.removeEventListener('scroll', this.scroll);
  };

  returnWeatherIcon = () => {
    if (this.props.icon === 'partly-cloudy-day') {
      return icons.partlyCloudyDay;
    } else if (this.props.icon === 'partly-cloudy-night') {
      return icons.partlyCloudyNight;
    } else if (this.props.icon === 'clear-night') {
      return icons.moonClear;
    } else if (this.props.icon === 'clear-day') {
      return icons.sunny;
    } else if (this.props.icon === 'cloudy') {
      return icons.cloudy;
    } else if (this.props.icon === 'rain') {
      return icons.rain;
    } else {
      return null;
    }
  };

  scroll = () => {
    const hello = document.getElementById('hello-text');
    const intro = document.getElementById('intro-text-upper');
    const chev = document.getElementById('chevron');
    const temp = document.getElementById('temp');

    if (hello.getBoundingClientRect().y < 64) {
      hello.classList.add('hidden');
    } else if (hello.getBoundingClientRect().y > 64) {
      hello.classList.remove('hidden');
    }

    if (intro.getBoundingClientRect().y < 94) {
      intro.classList.add('hidden');
    } else if (intro.getBoundingClientRect().y > 94) {
      intro.classList.remove('hidden');
    }

    if (chev.getBoundingClientRect().y < 100) {
      chev.classList.add('hidden');
    } else if (chev.getBoundingClientRect().y > 100) {
      chev.classList.remove('hidden');
    }

    if (temp.getBoundingClientRect().y < 100) {
      temp.classList.add('hidden');
    } else if (temp.getBoundingClientRect().y > 100) {
      temp.classList.remove('hidden');
    }
  };

  render() {
    return (
      <div className="austin-image-div" id="austin-image-div">
        <img
          src="/img/IMG_0326.jpg"
          alt="Downtown Austin"
          className="background-image"
        />
        <Header headerColor="header-main trans" />
        <div className="about-overlay">
          <div className="intro-text">
            <h1 className="hello-text" id="hello-text">
              HELLO
            </h1>
            <p className="intro-text-upper" id="intro-text-upper">
              {' '}
              MY NAME IS MIKE. I DESIGN AND BUILD WEBSITES IN AUSTIN, TX
            </p>
          </div>

          <div className="chevron-div basic-flex-row" id="chevron">
            <i className="far fa-chevron-double-down" />
          </div>

          <div className="temp-div" id="temp">
            <span>AUSTIN: {this.props.temp}</span> &nbsp;&nbsp;{' '}
            <span className="weather-icon">{this.returnWeatherIcon()}</span>
          </div>

          <div className="content-text">
            <div className="headshot-div">
              <img
                src="/img/headshot.jpg"
                alt="Headshot"
                className="headshot"
              />
            </div>
            <div className="bio-main">
              <p className="bio-lines">
                I spent 20 years at Apple as a qa engineer and manager working
                on high profile consumer facing software. My time there embedded
                several core principles in my mind that are the basis for how I
                approach designing and building web applications. I beleive that
                intuitive, effortless user experiences should obfuscate the
                underlying technology.
              </p>
            </div>
          </div>
          <Footer
            credits="Powered by:   "
            copyWrite="© 2018 Mike J Mitchell"
            className="about-footer"
          />
        </div>
      </div>
    );
  }
}

export default About;
