import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Home from './home';
import logo from './images/logo.png'
import Footer from './footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <div className="container">
        <header className="header">
          <img style={{alignContent:'center'}} alt="logo" style={{width:'35%'}}src={logo} />
        </header>
        <main className="main">
          <Home />
        </main>
        <footer className="footer">
          <Footer />
        </footer>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
