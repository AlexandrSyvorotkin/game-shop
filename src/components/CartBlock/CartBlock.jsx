import React, {useState} from 'react';
import {AiOutlineShoppingCart} from "react-icons/ai";
import {useSelector} from "react-redux";
import {calcTotalPrice} from "../../utils/utils";
import CartMenu from "../CartMenu/CartMenu";
import ItemsInCart from "../ItemsInCart";
import './CartBlock.css'


const CartBlock = () => {

    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
    const items = useSelector(state => state.cart.itemsInCart)
    const totalPrice = calcTotalPrice(items)


    return (
        <div className='cart-block'>
            <ItemsInCart quantity={items.length}/>
            <AiOutlineShoppingCart size={20} onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}/>
            {totalPrice > 0 ? <span className='cart-block__total-price'>{totalPrice}</span> : null}
            { isCartMenuVisible && <CartMenu items={items} onClick={() => null}/>}
        </div>
    );
};

export default CartBlock;
