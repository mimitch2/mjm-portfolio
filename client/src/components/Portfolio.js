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
          <SiteCard image={<img src="img/cocktail_site.png" alt="cocktail website" className="cocktail-card-image card-image"/>}/>
        </div>
        <div className={this.state.cardCss}>
          <SiteCard image={<img src="img/old_portfolio_site.png" alt="portfolio website" className="portfolio-card-image card-image"/>}/>
        </div>
        <div className={this.state.cardCss}>
          <SiteCard image={<img src="img/monster_site.png" alt="monster website" className="monster-card-image card-image"/>}/>
        </div>
      </div>
    )
  }
}

export default Portfolio;