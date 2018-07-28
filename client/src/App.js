import React, { Component } from 'react';
import './css/App.css';
import Header from './components/Header'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import createHistory from 'history/createBrowserHistory'
import About from './components/About'
import Loading from './components/Loading'
import Portfolio from './components/Portfolio'
// import Design from './components/Design'
import Blog from './components/Blog'
import Oops from './components/Oops'


const history = createHistory()
 


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cssShow: "content hidden"
    }
  }


 componentDidMount = () => {
   history.listen((location, action) => {
     // console.log(`The current URL is ${location.pathname}${location.search}${location.hash}`)
     // console.log(`The last navigation action was ${action}`)
     this.props.setURL(`${location.pathname}${location.search}${location.hash}`)

   })

   setTimeout(() => {
     this.setState({ cssShow: "content"})
   }, 2800);
   
 }

 render = () => {
   return (
     <BrowserRouter>
       <div className="App" >
         <div className="pre-load-all-hidden">
           {/* <Portfolio /> 
           <Design />
           <Blog />
           <About /> */}
           <img src="/img/IMG_0326.jpg" alt=""/>
           <img src="/img/old_portfolio_site.png" alt=""/>
           <img src="/img/monster_site.png" alt=""/>
           <img src="/img/cocktail_site.png" alt=""/>
           <img src="/img/web-design-bw.jpg" alt=""/>
           
         </div>
         <header>
           <Header />
         </header>
         <Loading /> 
     
         <div className={this.state.cssShow}> 
          

           <Switch>
             <Route exact path="/portfolio" component={Portfolio} />
             {/* <Route exact path="/design" component={Design} /> */}
             <Route exact path="/blog" component={Blog} />
             <Route  path="/" component={About} />
             <Route path="*" component={Oops} />
           </Switch>
         </div>  
       </div>
     </BrowserRouter>
   );
 }
}

export default App;

