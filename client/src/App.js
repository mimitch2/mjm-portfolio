import React, { Component } from 'react';
import './css/App.css';
import Header from './components/Header'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import createHistory from 'history/createBrowserHistory'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Design from './components/Design'
import Blog from './components/Blog'
import Oops from './components/Oops'


const history = createHistory()
 
class App extends Component {

componentDidMount = () => {
  console.log(this.props.url);
  history.listen((location, action) => {
    // console.log(`The current URL is ${location.pathname}${location.search}${location.hash}`)
    // console.log(`The last navigation action was ${action}`)
    this.props.set(`${location.pathname}${location.search}${location.hash}`)
  })
}



render() {
  return (
    <BrowserRouter>
      <div className="App" >
        <header>
          <Header />
        </header>
        <div className="content">       
          <Switch>
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/design" component={Design} />
            <Route path="/blog" component={Blog} />
            <Route exact path="/" component={About} />
            <Route path="*" component={Oops} />
            
          </Switch>
        </div>  
      </div>
    </BrowserRouter>
  );
}
}

export default App;

