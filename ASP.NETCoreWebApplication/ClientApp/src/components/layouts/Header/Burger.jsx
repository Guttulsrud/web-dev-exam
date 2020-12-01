import React from 'react';
import {Hamburger} from './style';

const Burger = ({ open, setOpen }) => {
    return(
        <Hamburger open={open} onClick={() => setOpen(!open)}>
            <div/>
            <div/>
            <div/>
        </Hamburger>
    )
}

export default Burger;