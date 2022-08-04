import React from 'react';
import './GamePage.css'
import {useSelector} from "react-redux";
import {GameCover} from "../../components/GameCover/GameCover";
import GameGenre from "../../components/GameGenre/GameGenre";
import GameBuy from "../../components/GameBuy/GameBuy";
import './GamePage.css'

const GamePage = () => {

    const game = useSelector(state => state.game.currentGame)

    if (!game) return null

    return (
        <div className='game-page'>
            <h1 className='game-page__title'>{game.title}</h1>
            <div className="game-page__content">
                <div className="game-page__left">
                    <iframe src={game.video} width='90%' height='400px' title='Youtube Video Player' frameBorder='null'>
                    </iframe>
                </div>
                <div className="game-page__right">
                    <GameCover  image={game.image}/>
                    <p>{game.description}</p>
                    <p className='secondary-text'>Популярные метки этого продукта:</p>
                    <div className='game-item__genre'>
                        {game.genres.map(genre =>
                            <GameGenre genre={genre} key={genre}/>
                        )}
                    </div>
                    <div className="game-page__buy">
                        <GameBuy game={game}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GamePage;
