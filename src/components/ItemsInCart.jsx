import React from 'react';

const ItemsInCart = ({quantity = 0 }) => {
    return quantity > 0 ?(
        <div className='absolute w-[20px] h-[20px] bg-orange-800 rounded-xl text-base flex justify-center text-slate-200 left-[15px] top-[-10px] z-10'>
            {quantity}
        </div>
    ) : null;
};

export default ItemsInCart;
