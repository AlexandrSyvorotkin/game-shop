import React from 'react';
import {GameCover} from "../GameCover/GameCover";
import GameBuy from "../GameBuy/GameBuy";
import GameGenre from "../GameGenre/GameGenre";
import './GameItem.css'

const GameItem = ({title, img, game}) => {
    return (
        <div className='game-item'>
            <GameCover image={img}/>
            <div className='game-item__details'>
                <span className='game-item__title'>{title}</span>

                <div className='game-item__genre'>
                    {game.genres.map(genre => <GameGenre genre={genre} key={genre}/>)}
                </div>
                <div className='game-item__buy'>
                <span className='game_item__buy'>
                    <GameBuy game={game}/>
                </span>
                </div>
            </div>
        </div>
    );
};

export default GameItem;
