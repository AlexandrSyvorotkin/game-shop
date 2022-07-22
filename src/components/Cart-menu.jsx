import React from 'react';
import {calcTotalPrice} from "./utils";
import Button from "../ui/Button";
import CartItem from './Cart-item'

const CartMenu = ({ items , onClick}) => {
    return (
        <div className='absolute top-[30px] left-[-300px] bg-lime-600 w-[400px] p-4 z-10 rounded-xl'>
            <div className='cart-menu__games-list'>
                { items.length > 0 ? items.map(game => <CartItem key={game.title} price={game.price} title={game.title} id={game.id} />) : 'Корзина пуста'}
            </div>
            {
                items.length > 0 ?
                    <div className='mt-[20px] p-4 border-t-4 border-indigo-500'>
                        <div className='flex justify-between mb-[15px]'>
                            <span>Итого:</span>
                            <span>{calcTotalPrice(items)} руб</span>
                        </div>
                        <Button>Оформить заказ</Button>
                    </div>
                    : null
            }
        </div>
    );
};

export default CartMenu;
