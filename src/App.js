import React from 'react';
import './App.css';
import GameBoard from './components/GameBoard/GameBoard'

class App extends React.Component {
  render() {


    return (
      <div className="App">
        <header className="App-header">
          REACT MASTERMIND~!
        </header>
        <GameBoard />
      </div>
    );
  }
}

export default App;
