import React from 'react';
import Button from "../ui/Button";
import {useDispatch, useSelector} from "react-redux";
import {addItemInCart, deleteItemFromCart} from "../redux/cart/reducer";

const GameBuy = ({ game }) => {

    const dispatch = useDispatch()
    const items = useSelector(state => state.cart.itemsInCart)
    const isItemInCart = items.some(item => item.id === game.id)

    const handleClick = (e) => {
        e.stopPropagation()
        if ( isItemInCart) {
            dispatch(deleteItemFromCart(game.id))
        } else {
            dispatch(addItemInCart(game))
        }

    }

    return (
        <div className='flex gap-[15px] items-center mt-[5px]'>
            <span>{game.price}</span>
            <Button onClick={ handleClick }>
                {isItemInCart ? 'Убрать из корзины' : 'В корзину'}
            </Button>
        </div>
    );
};

export default GameBuy;
