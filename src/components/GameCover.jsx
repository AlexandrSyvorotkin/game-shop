import React from 'react';

export const GameCover = ({image}) => {
    return (
        <div className='w-[300px] h-[200px] bg-cover' style={{ backgroundImage: `url(${image})` }}/>
    );
};

