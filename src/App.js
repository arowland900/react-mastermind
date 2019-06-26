import React, { Component } from 'react';
import './App.css';
import GameBoard from './components/GameBoard/GameBoard'
import ColorPicker from './components/ColorPicker/ColorPicker'
import GameTimer from './components/GameTimer/GameTimer'
import NewGameButton from './components/NewGameButton/NewGameButton'
import Footer from './components/Footer/Footer'

const colors = ['#7CCCE5', '#FDE47F', '#E04644', '#B576AD']

class App extends Component {
  constructor(){
    super();
    this.state = {
      selColorIdx: 0
    }
  }
  render() {
    return (
      <div className="App">
        Selected Color: {colors[this.state.selColorIdx]}
        <header className="App-header">
          REACT MASTERMIND~!
        </header>
        <div className="flex-container">
          <GameBoard />
          <div>
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
