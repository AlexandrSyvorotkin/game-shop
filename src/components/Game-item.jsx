import React from 'react';
import {GameCover} from "./GameCover";
import GameBuy from "./GameBuy";
import GameGenre from "./game-genre";

const GameItem = ({title, img, game}) => {
    return (
        <div className='bg-gray-700 w-[320px] h-[300px] p-[10px] relative rounded-lg'>
            <GameCover image={img}/>
            <div>
                <span className='font-bold'>{title}</span>
            </div>
            <div className='flex gap-[10px]'>
                {game.genres.map(genre => <GameGenre genre={genre}/>)}
            </div>
            <span className='font-bold'>
                <GameBuy game={game}/>
            </span>
        </div>
    );
};

export default GameItem;
