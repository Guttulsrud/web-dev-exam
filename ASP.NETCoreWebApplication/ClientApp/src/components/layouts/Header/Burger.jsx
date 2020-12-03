import React from 'react';
import {Hamburger} from './style';
import PropTypes from "prop-types"

const Burger = ({open, setOpen}) => {
    return (
        <Hamburger open={open} onClick={() => setOpen(!open)}>
            <div/>
            <div/>
            <div/>
        </Hamburger>
    )
}

Burger.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired
}

export default Burger;