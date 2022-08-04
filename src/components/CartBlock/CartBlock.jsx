import React, {useCallback, useState} from 'react';
import {AiOutlineShoppingCart} from "react-icons/ai";
import {useSelector} from "react-redux";
import {calcTotalPrice} from "../../utils/utils";
import CartMenu from "../CartMenu/CartMenu";
import ItemsInCart from "../ItemsInCart/ItemsInCart";
import './CartBlock.css'
import {useNavigate} from "react-router-dom";


const CartBlock = () => {

    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
    const items = useSelector(state => state.cart.itemsInCart)
    const totalPrice = calcTotalPrice(items)
    const navigate = useNavigate()

    const handleClick = useCallback(() => {
        setIsCartMenuVisible(false)
        navigate('/order')
    }, [navigate])


    return (
        <div className='cart-block'>
            <ItemsInCart quantity={items.length}/>
            <AiOutlineShoppingCart size={20} onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}/>
            {totalPrice > 0 ? <span className='cart-block__total-price'>{totalPrice}</span> : null}
            { isCartMenuVisible && <CartMenu items={items} onClick={handleClick}/>}
        </div>
    );
};

export default CartBlock;
