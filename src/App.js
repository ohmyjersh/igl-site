import React, { Component } from 'react';
import Nav from './navigation';
import ImageGallery from './imageGallery'
import Book from './book';
import Footer from './footer';
import Contact from './contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="container">
        <header class="header">
          <Nav />
        </header>
        <main class="main">
          <Contact />
          {/* <ImageGallery /> */}
          {/* <Book /> */}
        </main>
        <footer class="footer">
          <Footer />
        </footer>
        </div>
      </div>
    );
  }
}

export default App;
