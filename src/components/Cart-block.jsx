import React, {useState} from 'react';
import {AiOutlineShoppingCart} from "react-icons/ai";
import {useSelector} from "react-redux";
import {calcTotalPrice} from "./utils";
import CartMenu from "./Cart-menu";
import ItemsInCart from "./items-in-cart";


const CartBlock = () => {

    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
    const items = useSelector(state => state.cart.itemsInCart)
    const totalPrice = calcTotalPrice(items)


    return (
        <div className='flex justify-between items-center relative'>
            <ItemsInCart quantity={items.length}/>
            <AiOutlineShoppingCart size={20} onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}/>
            {totalPrice > 0 ? <span className='ml-[20px] font-bold'>{totalPrice}</span> : null}
            { isCartMenuVisible && <CartMenu items={items} onClick={() => null}/>}
        </div>
    );
};

export default CartBlock;
