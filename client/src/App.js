import React, { Component } from 'react';
import './css/App.css';
import Header from './components/Header'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from './components/About'
import Code from './components/Code'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <Header />
          </header>
       
          <div className="content">
         
            <Switch>
              <Route path="/code" component={Code} />
              <Route path="/" component={About} />
            </Switch>
         
          </div>
       
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
