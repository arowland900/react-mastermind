import React from 'react'
import GuessScore from './GuessScore'
import GuessPegs from './GuessPegs'

const GuessRow = (props) => (
    <div className='component flex-container-row'>
        GuessRow {props.num}
        <GuessPegs />
        <GuessScore />
    </div>
);

export default GuessRow;