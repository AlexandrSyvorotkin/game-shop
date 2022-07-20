import React from 'react';
import Button from "../ui/Button";

const GameBuy = ({ game }) => {
    return (
        <div className='flex gap-[15px] items-center mt-[5px]'>
            <span>{game.price}</span>
            <Button>В корзину</Button>
        </div>
    );
};

export default GameBuy;
