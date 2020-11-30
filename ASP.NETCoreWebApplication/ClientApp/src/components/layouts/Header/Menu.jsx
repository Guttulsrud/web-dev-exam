import React from 'react';

import {MobileMenu} from './style';
import {Link, NavLink} from "react-router-dom";

const Menu = ({ open, setOpen }) => {
    return (
        <MobileMenu open={open}>
           <ul className={"mobile-menu"}>
               <li><NavLink as={Link} onClick={() => setOpen(false)} to="/">Home</NavLink></li>
               <li><NavLink as={Link} onClick={() => setOpen(false)} to="/games">Explore Games</NavLink></li>
               <li><NavLink as={Link} onClick={() => setOpen(false)} to="/psplus">PS Plus</NavLink></li>
               <li><NavLink as={Link} onClick={() => setOpen(false)} to="/accessories">Accessories</NavLink></li>
               <li><NavLink as={Link} onClick={() => setOpen(false)} to="/playstation">Playstation 5</NavLink></li>
           </ul>
        </MobileMenu>
    )
}

export default Menu;