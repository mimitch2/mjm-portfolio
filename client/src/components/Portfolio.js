import React, { Component } from 'react'
import '../css/App.css'
import SiteCard from './SiteCard'
// import Footer from './Footer'




class Portfolio extends Component {


  componentDidMount = () => {
    // setTimeout(() => {
    //   this.setState({cardCss: "card-div"})
    // }, 900);
    
  }


  render() {
    return (
      <div>
        <div className="portfolio-main">
       
          <div className="card-div">
            <SiteCard image="img/cocktail_site.png" heading="COCKTAIL APP"
              info="A React/Redux based app that provides cocktail recipes."
              icons={  
                <div className="portfolio-icon-div">
                  <i className="fab port-icon fa-react"></i>
                  <i className="fab port-icon fa-html5"></i>
                  <i className="fab port-icon fa-js-square"></i>
                  <i className="fab port-icon fa-css3-alt"></i>
                  <i className="fab port-icon fa-node"></i>
                </div>} 
              url="https://mjm-cocktail-app.herokuapp.com/"/>

          </div>
        
          <div className="card-div">
            <SiteCard image="img/old_portfolio_site.png" id="card-overlay-portfolio" 
              heading="OLD PORTFOLIO"
              info="A basic jQuery/Javascript portfolio"
              icons={  
                <div className="portfolio-icon-div">
                  <i className="fab port-icon fa-html5"></i>
                  <i className="fab port-icon fa-js-square"></i>
                  <i className="fab port-icon fa-css3-alt"></i>
                </div>} 
              url="https://mimitch2.github.io/mainPage/sites/Portfolio/index.html"/>
          </div>

          <div className="card-div">
            <SiteCard image="img/monster_site.png" id="card-overlay-monster" heading="MONSTER RUN!"
              info="A click based game using Javascript, jQuery, HTML5 & CSS"
              icons={  
                <div className="monster-icon-div">
                  <i className="fab port-icon fa-html5"></i>
                  <i className="fab port-icon fa-js-square"></i>
                  <i className="fab port-icon fa-css3-alt"></i>
                </div>} 
              url="https://mimitch2.github.io/mainPage/sites/monster-run/index.html"/>
          </div>
         
        </div>
        {/* <Footer id={"portfolio-footer"} credits={`Powered by: `} copyWrite={`Designed and built by Mike Mitchell - © 2018`}/> */}
      </div>
    )
  }
}

export default Portfolio;