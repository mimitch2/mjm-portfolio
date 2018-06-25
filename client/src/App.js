import React, { Component } from 'react';
import './css/App.css';
import Header from './components/Header'
// import { BrowserRouter, Route, Switch } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Header />
        </header>
        <div className="content">

        </div>
 
      </div>
    );
  }
}

export default App;
