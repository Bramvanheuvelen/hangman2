import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './containers/Board'
import NewGameButton from './components/NewGameButton'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="actions">
            <NewGameButton />
          </div>
      <Board />
      </div>
    );
  }
}

export default App;
