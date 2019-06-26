import React from 'react'
import GuessRow from './GuessRow'

const GameBoard = (props) => (
    <div className='component'>
            GameBoard
            <GuessRow num={1} />
            <GuessRow num={2} />
        
    </div>
);

export default GameBoard;