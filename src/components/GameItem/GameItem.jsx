import React from 'react';
import {GameCover} from "../GameCover/GameCover";
import GameBuy from "../GameBuy/GameBuy";
import GameGenre from "../GameGenre/GameGenre";
import './GameItem.css'
import {useDispatch} from "react-redux";
import {setCurrentGame} from "../../redux/games/reducer";
import {useNavigate} from "react-router-dom";

const GameItem = ({title, img, game}) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClick = () => {
        dispatch(setCurrentGame(game))
        navigate(`/app/${game.title}`)
    }

    return (
        <div className='game-item' onClick={handleClick}>
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
