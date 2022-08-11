import React from 'react';
import './StartPage.css'
import StartButton from "../../ui/StartButton";

const StartPage = ({enterShopHandler}) => {

    return (
        <div className='startPage'>
            <div className='gameshop'>
                <span>GAME SHOP</span>
            </div>
            <StartButton onClick={enterShopHandler}>Войти</StartButton>
        </div>
    );
};

export default StartPage;