import React, {useState} from 'react';
import {MobileNavWrapper} from "./style";
import Nav from 'react-bootstrap/cjs/Nav';
import Burger from './Burger';
import Menu from './Menu';
import {Link} from "react-router-dom";
import PsLogo from "./PsLogo";
import Navbar from "react-bootstrap/cjs/Navbar";

const MobileNav = () => {
    const [open, setOpen] = useState(false);

    return (
        <MobileNavWrapper>
            <Navbar className={"d-flex justify-content-between pl-0 pr-0"}>
                <Navbar.Brand as={Link} to={"/"}>
                    <PsLogo color={"#0070D1"}></PsLogo>
                </Navbar.Brand>

                <Nav className={"d-flex  align-items-center align-content-center"}>
                    <Burger open={open} setOpen={setOpen}/>
                </Nav>
            </Navbar>

            <Menu open={open} setOpen={setOpen}/>

        </MobileNavWrapper>
    )
}

export default MobileNav;