import React from 'react'
import GuessRow from './GuessRow'

const GameBoard = (props) => (
    <div className='component'>
        {props.guesses.map((g,i)=>
            <GuessRow 
                guess={g} 
                colors={props.colors} 
                row={i}
                currGuess={i === (props.guesses.length -1)}
                key={i} 
            />
        )} 
    </div>
);

export default GameBoard;