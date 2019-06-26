import React from 'react'
import GuessScore from './GuessScore'
import GuessPegs from './GuessPegs'

const GuessRow = (props) => (
    <div className='component flex-container'>
        Guess Row {props.row + 1} 
        <GuessPegs 
            colors={props.colors}
            code={props.guess.code}
        />
        {props.currGuess ? <button> lol </button> : <GuessScore />}
    </div>
);

export default GuessRow;