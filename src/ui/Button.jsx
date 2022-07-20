import React from 'react';

const Button = ({onClick, type, children, size = 's'}) => {
    return (
        <button onClick={onClick} className='bg-cyan-700 p-[5px] rounded-lg'>
            {children}
        </button>
    );
};

export default Button;
