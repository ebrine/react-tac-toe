import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './containers/Navbar'

import Game from './components/Game'

class App extends Component {
  onClick () {
    console.log('click')
  }
  render() {
    return (
      <div className="App">

        <Navbar onClick={this.onClick}/>

        <Game />

      </div>
    );
  }
}

export default App;
