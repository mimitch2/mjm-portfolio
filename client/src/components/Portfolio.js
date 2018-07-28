import React, { Component } from 'react'
import '../css/App.css'
import SiteCard from './SiteCard'


class Portfolio extends Component {

  constructor(props) {
    super(props)
    this.state ={
      // cardCss: "card-div card-div-hidden",
      cardCss: "card-div"
    }
  }

  componentDidMount = () => {
    // setTimeout(() => {
    //   this.setState({cardCss: "card-div"})
    // }, 900);
    
  }


  render() {
    return (
      <div className="portfolio-main site-cards-main">
        <div className={this.state.cardCss}>
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
        <div className={this.state.cardCss}>
          <SiteCard image="img/old_portfolio_site.png" id="card-overlay-portfolio" 
            heading="OLD PORTFOLIO"
            info="A basic jQuery/Javascript protfolio site"
            icons={  
              <div className="portfolio-icon-div">
                <i className="fab port-icon fa-html5"></i>
                <i className="fab port-icon fa-js-square"></i>
                <i className="fab port-icon fa-css3-alt"></i>
              </div>} 
            url="http://www.mikejmitchell.com/mainPage/sites/Portfolio/index.html"/>
        </div>
        <div className={this.state.cardCss}>
          <SiteCard image="img/monster_site.png" id="card-overlay-monster" heading="MONSTER RUN!"
            info="A click based game using Javascript, jQuery, HTML5 & CSS"
            icons={  
              <div className="monster-icon-div">
                <i className="fab port-icon fa-html5"></i>
                <i className="fab port-icon fa-js-square"></i>
                <i className="fab port-icon fa-css3-alt"></i>
              </div>} 
            url="http://www.mikejmitchell.com/mainPage/sites/monster-run/index.html"/>
        </div>
      </div>
    )
  }
}

export default Portfolio;