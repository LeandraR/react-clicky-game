import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Game from './components/ClickGame'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Game />
      </div>
    );
  }
}

export default App;
