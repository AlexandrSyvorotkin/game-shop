import React from 'react';
import {GameCover} from "./GameCover";

const GameItem = ({title, img, game}) => {
    return (
        <div className='bg-gray-700 w-[320px] h-[300px] p-[10px] relative'>
            <GameCover image={img}/>
            <div>
                <span className='font-bold'>{title}</span>
            </div>
            <div className='flex gap-[10px]'>
                {game.genres.map(genre => <ul><li>{genre}</li></ul>)}
            </div>
            <span className='font-bold'>Buy</span>
        </div>
    );
};

export default GameItem;
