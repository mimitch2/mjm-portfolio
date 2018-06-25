import React, { Component } from 'react';
import './css/App.css';
import Header from './components/Header'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from './components/About'
import Code from './components/Code'
import Design from './components/Design'
import Blog from './components/Blog'


class App extends Component {

  state = {
    hide: "hide"
  }

  // click = () => {
  
  //   console.log(document.getElementsByClassName("comp"));
  //   document.getElementsByClassName("comp")[0].id="hide"
  // }

  render() {
    return (
      <BrowserRouter>
        <div className="App" /* onClick={this.click} */ >
          <header>
            <Header />
          </header>
          <div className="content" >    
        
            <Switch>
              <Route path="/code" component={Code} />
              <Route path="/design" component={Design} />
              <Route path="/blog" component={Blog} />
              <Route path="/" component={About} />
            </Switch>
         
          </div>
       
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
