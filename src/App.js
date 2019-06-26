import React from 'react';
import './App.css';
import GameBoard from './components/GameBoard/GameBoard'
import ColorPicker from './components/ColorPicker/ColorPicker'

class App extends React.Component {
  render() {


    return (
      <div className="App">
        <header className="App-header">
          REACT MASTERMIND~!
        </header>
        <GameBoard />
        <ColorPicker />
      </div>
    );
  }
}

export default App;
