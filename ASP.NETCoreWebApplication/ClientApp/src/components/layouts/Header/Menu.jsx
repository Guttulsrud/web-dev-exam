import React from 'react';
import {MobileMenu} from './style';
import {Link, NavLink} from "react-router-dom";
import {SignLogo} from "../../common/SignLogo";
import SearchBar from "../../common/SearchBar";
import PropTypes from "prop-types"


const Menu = ({open, setOpen}) => {
    const handleClose = () => setOpen(false);
    return (
        <MobileMenu open={open}>
            <SignLogo/>
            <SearchBar handleClose={handleClose}/>
            <ul className={"mobile-menu"}>
                <li><NavLink as={Link} onClick={() => setOpen(false)} to="/">Home</NavLink></li>
                <li><NavLink as={Link} onClick={() => setOpen(false)} to="/games">Explore Games</NavLink></li>
                <li><NavLink as={Link} onClick={() => setOpen(false)} to="/accessories">Accessories</NavLink></li>
                <li><NavLink as={Link} onClick={() => setOpen(false)} to="/devices">Playstation 5</NavLink></li>
            </ul>
        </MobileMenu>
    )
}

Menu.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired
}

export default Menu;