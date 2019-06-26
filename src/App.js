import React, { Component } from 'react';
import './App.css';
import GameBoard from './components/GameBoard/GameBoard'
import ColorPicker from './components/ColorPicker/ColorPicker'
import GameTimer from './components/GameTimer/GameTimer'
import NewGameButton from './components/NewGameButton/NewGameButton'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          REACT MASTERMIND~!
        </header>
        <GameBoard />
        <ColorPicker />
        <GameTimer />
        <NewGameButton />
      </div>
    );
  }
}

export default App;
