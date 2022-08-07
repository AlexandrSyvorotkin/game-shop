import React from 'react';
import GameItem from "../../components/GameItem/GameItem";
import './HomePage.css'
import {GAMES} from "../../data";

const HomePage = () => {

    return (
        <div className='homepage'>
            {GAMES.map(game => <GameItem title={game.title} img={game.image} game={game} key={game.id}/>)}
        </div>
    );
};

export default HomePage;
