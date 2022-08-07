import React from 'react';
import './StartButton.css'

const StartButton = ({children, onClick}) => {
    return (
        <div className='startButton' onClick={onClick}>
            <a className='a'>
                {children}
            </a>
        </div>

    );
};

export default StartButton;