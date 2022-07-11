import React from 'react';
import {AiOutlineShoppingCart} from "react-icons/ai";


const CartBlock = () => {
    return (
        <div className='flex justify-between items-center relative'>
            <AiOutlineShoppingCart size={20} />
            <span className='ml-[20px] font-bold'>2321 rub.</span>
        </div>
    );
};

export default CartBlock;
