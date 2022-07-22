import React from 'react';

const CartItem = ({id, price, title}) => {
    return (
        <div>
            <span>{title}</span>
            <div>
                <span>{price} руб.</span>
            </div>
        </div>
    );
};

export default CartItem;
