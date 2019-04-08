import React, { Component } from 'react';
import './App.scss';
import Ad from './components/Ad';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Ad />
        <Nav />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
