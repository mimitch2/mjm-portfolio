import React, { Component } from 'react';
import './css/App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import createHistory from 'history/createBrowserHistory'
import About from './components/About'
import Loading from './components/Loading'
import Portfolio from './components/Portfolio'
import Blog from './components/Blog'
import BlogEntry from "./components/BlogEntry"
import Oops from './components/Oops'
// import Footer from './components/Footer'


const history = createHistory()
 

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
      cssShow: "content hidden",
      temp: "",
      icon: ""
    }
  }

 


 componentDidMount = () => {

   this.getTemp();
   history.listen((location, action) => {
     // console.log(`The current URL is ${location.pathname}${location.search}${location.hash}`)
     // console.log(`The last navigation action was ${action}`)
     //  this.props.setURL(`${location.pathname}${location.search}${location.hash}`)
   })

   setTimeout(() => {
     this.setState({ cssShow: "content"})
     console.log(this.props);
   }, 2800);

   
 }




 async getTemp () {
   try {
     const response = await fetch('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/fa792c1f87ce72cb121f485b11488cd4/30.2672,-97.7431')
     const json = await response.json()
     this.setState({temp: Math.floor(json.currently.temperature).toString() + "º", 
       icon: json.currently.icon})
   } catch (error) {
     console.log(error);
   }
 }

 render = () => {
   return (
     <BrowserRouter>
       <div className="App" >
   
         <div className="pre-load-all-hidden">
           <img src="/img/IMG_0326.jpg" alt=""/>
           <img src="/img/old_portfolio_site.png" alt=""/>
           <img src="/img/monster_site.png" alt=""/>
           <img src="/img/cocktail_site.png" alt=""/>
           <img src="/img/web-design-bw.jpg" alt=""/>
           <img src="/img/DSCF0035.jpg" alt=""/>
           <img src="https://www.telerik.com/clientsfiles/244515_ie-double-scrollbar.jpg?sfvrsn=d930d843_0" alt=""/>
         </div>

         <Loading /> 

         <div className={this.state.cssShow}> 
           <Switch {...this.props}>
             <Route exact path="/portfolio" component={Portfolio} />
             <Route exact path="/blog" component={Blog} />
             <Route path="/post/:slug" component={BlogEntry} />
             <Route exact path="/"  render={(props) => <About {...props} temp={this.state.temp} icon={this.state.icon}/>} />
             <Route path="*" component={Oops} />
           </Switch>
         </div>  
      
         
       </div>
       
     </BrowserRouter>
   );
 }
}

export default App;
