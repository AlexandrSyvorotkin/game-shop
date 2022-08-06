import React from 'react';
import './OrderPage.css'
import {useSelector} from "react-redux";
import OrderItem from '../../components/OrderItem/OrderItem'
import {calcTotalPrice} from "../../utils/utils";

const OrderPage = () => {

    const games = useSelector(state => state.cart.itemsInCart)

    if (games.length === 0) {
        return <h1>Корзина пуста</h1>
    }

    return (
        <div className='order-page'>
            <div className='order-page__left'>
                {games.map(game => <OrderItem game={game}/>)}
            </div>
            <div className="order-page__right">
                <div className="order-page__total-price">
                    <span>
                        {games.length} товаров на сумму: { calcTotalPrice(games) } руб.
                    </span>
                </div>
            </div>
        </div>
    );
};

export default OrderPage;
