import React from 'react'
import GuessRow from './GuessRow'

const GameBoard = (props) => (
    <div className='component flex-container-row'>
        GameBoard
        <div className='flex-container-column'>
            <GuessRow num={1} />
            <GuessRow num={2} />
        </div>
    </div>
);

export default GameBoard;