import React, { Component } from 'react';
import Home from './home';
import logo from './images/logo.png'
import Footer from './footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
        <header className="header">
          <img alt="logo" className="logo "src={logo} />
        </header>
        <main className="main">
          <Home />
        </main>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
