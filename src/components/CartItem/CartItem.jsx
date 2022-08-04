import React from 'react';
import './CartItem.css'

const CartItem = ({id, price, title, game}) => {



    return (
        <div className='cart-item'>
            <span>{title}</span>
            <div className='cart-item__price'>
                <span>{price} руб.</span>
            </div>
        </div>
    );
};

export default CartItem;
