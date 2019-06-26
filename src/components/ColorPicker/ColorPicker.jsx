import React from 'react'

const ColorPicker = (props) => (
    <div className='component'>
        {props.colors.map(c => 
            <button key={c}>{c}</button>
        )}
    </div>
);

export default ColorPicker;