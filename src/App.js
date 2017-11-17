import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import routes from './routes';
import Nav from './navigation';
import Footer from './footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <div className="container">
        <header className="header">
          <Nav />
        </header>
        <main className="main">
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
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
