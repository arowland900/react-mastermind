import React, { Component } from 'react';
import './App.css';
import GameBoard from './components/GameBoard/GameBoard'
import ColorPicker from './components/ColorPicker/ColorPicker'
import GameTimer from './components/GameTimer/GameTimer'
import NewGameButton from './components/NewGameButton/NewGameButton'
import Footer from './components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          REACT MASTERMIND~!
        </header>
        <div className="flex-container-row">
          <GameBoard />
          <div className="flex-container-column">
            <ColorPicker />
            <GameTimer />
            <NewGameButton />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
