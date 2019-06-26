import React, { Component } from 'react';
import './App.css';
import GameBoard from './components/GameBoard/GameBoard'
import ColorPicker from './components/ColorPicker/ColorPicker'
import GameTimer from './components/GameTimer/GameTimer'
import NewGameButton from './components/NewGameButton/NewGameButton'
import Footer from './components/Footer/Footer'

const colors = ['blue', 'green', 'red', 'yellow']


class App extends Component {
	constructor() {
		super();
		this.state = {
			selColorIdx: 0,
			guesses: [this.getNewGuess(), this.getNewGuess()],
			code: this.generateCode()
		}
	};
	getNewGuess(){
		return {
			// code: [null, null, null, null],
			code: [0, 1, 2, 3],
			score: {
				perfect: 0,
				almost: 0
			}
		}
	};
	generateCode() {
		return new Array(4).fill().map(() => Math.floor(Math.random() * 4));
	};
	render() {
		return (
			<div className="App">
				<button onClick={() => this.setState((state) => {
					return {
						selColorIdx: ++state.selColorIdx % 4
					};
				})}>
					Next Color
				</button>
				Selected Color: {colors[this.state.selColorIdx]}
				<header className="App-header">
					REACT MASTERMIND~!
       			 </header>
				<div className="flex-container">
					<GameBoard colors={colors} guesses={this.state.guesses} />
					<div>
						<ColorPicker colors={colors} selColorIdx={this.state.selColorIdx} />
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
