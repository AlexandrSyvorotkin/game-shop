import React from 'react';
import './StartPage.css'
import StartButton from "../../ui/StartButton";

const StartPage = ({enterShopHandler}) => {

    return (
        <div className='startPage'>
            <StartButton onClick={enterShopHandler}>Войти</StartButton>
        </div>
    );
};

export default StartPage;