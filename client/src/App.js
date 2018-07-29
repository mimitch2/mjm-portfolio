import React, { Component } from 'react';
import './css/App.css';
import Header from './components/Header'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import createHistory from 'history/createBrowserHistory'
import About from './components/About'
import Loading from './components/Loading'
import Portfolio from './components/Portfolio'
import Blog from './containers/BlogContainer'
import Oops from './components/Oops'
import Butter from 'buttercms';

const butter = Butter('b7d2cf55ae6b0b2a49b996a89ae2ddb3d0f83b57');
const history = createHistory()
 
let frag;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cssShow: "content hidden",
      temp: "",
      icon: "",
      body:""
    }
  }


 componentDidMount = () => {
   butter.post.list({page: 1, page_size: 10}).then(function(response) {
     
     return response.data.data
   }).then(data => {     
     this.props.setBlog(data)
     this.setState({body: data[0].body})
     //  console.log(this.state.body, typeof(this.state.body));
   })
   this.getTemp();
   history.listen((location, action) => {
     // console.log(`The current URL is ${location.pathname}${location.search}${location.hash}`)
     // console.log(`The last navigation action was ${action}`)
     this.props.setURL(`${location.pathname}${location.search}${location.hash}`)
     this.getTemp();
   })
   setTimeout(() => {
  
     
     this.setState({ cssShow: "content"})
   }, 2800);

   //  setTimeout(() => {
   //    this.getTemp();
   //  }, 50000);
   
 }

 getTemp = () => {
   fetch('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/fa792c1f87ce72cb121f485b11488cd4/30.2672,-97.7431').then(function(response) {
     return response.json();
   })
     .then(data => this.setState({temp: Math.floor(data.currently.temperature).toString() + "º", 
       icon: data.currently.icon}))
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
         </div>

         <header>
           <Header />
         </header>
         <Loading /> 

         <div className={this.state.cssShow}> 
           <Switch>
             <Route exact path="/portfolio" component={Portfolio} />
             <Route exact path="/blog" component={Blog} />
             <Route  path="/"  render={(props) => <About {...props} temp={this.state.temp} icon={this.state.icon}/>} />
             <Route path="*" component={Oops} />
           </Switch>
         </div>  
       </div>
     </BrowserRouter>
   );
 }
}

export default App;

