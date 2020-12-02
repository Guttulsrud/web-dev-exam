import React from 'react';

import {MobileMenu, MobileNavWrapper} from './style';
import {Link, NavLink} from "react-router-dom";
import {SignLogo} from "../../common/SignLogo";
import Input from "../../common/Input";
import SearchBar from "../../common/SearchBar";


const Menu = ({ open, setOpen }) => {
    const handleClose = () => setOpen(false);
    return (
        <MobileMenu open={open}>
            <SignLogo/>
            <SearchBar handleClose={handleClose}></SearchBar>
           <ul className={"mobile-menu"}>
               <li><NavLink as={Link} onClick={() => setOpen(false)} to="/">Home</NavLink></li>
               <li><NavLink as={Link} onClick={() => setOpen(false)} to="/games">Explore Games</NavLink></li>
               <li><NavLink as={Link} onClick={() => setOpen(false)} to="/accessories">Accessories</NavLink></li>
               <li><NavLink as={Link} onClick={() => setOpen(false)} to="/devices">Playstation 5</NavLink></li>
           </ul>
        </MobileMenu>
    )
}

export default Menu;