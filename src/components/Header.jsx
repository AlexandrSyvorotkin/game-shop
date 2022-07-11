import React from 'react';
import {NavLink} from "react-router-dom";
import CartBlock from "./Cart-block";

const Header = () => {
    return (
        <header className='flex h-[80px] items-center justify-between mb-[30px]'>
            <div className=''>
                <NavLink to='/' className='text-[24px] font-bold'>Game Store</NavLink>
            </div>
            <div>
                <CartBlock/>
            </div>
        </header>
    );
};

export default Header;
