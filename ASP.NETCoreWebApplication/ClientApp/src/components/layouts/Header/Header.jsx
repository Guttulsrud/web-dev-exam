import React from 'react';
import Navbar from 'react-bootstrap/cjs/Navbar';
import Nav from 'react-bootstrap/cjs/Nav';
import {NavLink,Link, useLocation} from 'react-router-dom';
import {HeaderBody} from './style';

import PsLogo from "./PsLogo";


import Container from 'react-bootstrap/Container';
import SearchIcon from "./SearchIcon";


const Header = () => {
    const location = useLocation()
    console.log(location.pathname)
    let whiteText = location.pathname === "/login"
    return (

        <HeaderBody style={{zIndex: "100000"}}>
            <Container>
            <Navbar className={"d-flex justify-content-between pl-0 pr-0"} style={{width: "100%"}}>
                <Navbar.Brand as={Link} to={"/"}>
                    <PsLogo color={"#0070D1"}></PsLogo>
                </Navbar.Brand>
                <Nav className={"d-flex justify-content-around pl-0 pr-0 header-links"} style={{width: "100%", fontSize: "1.1rem", fontWeight: "500"}}>
                    <Nav.Item>
                        <NavLink to="/games" activeClassName="activeRoute" activeStyle={{color: '#0070D1'}}>Explore Games</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink to="/psplus" activeClassName="activeRoute" activeStyle={{color: '#0070D1'}}>PS Plus</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink to="/accessories" activeClassName="activeRoute" activeStyle={{color: '#0070D1'}}>Accessories</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink to="/playstation" activeClassName="activeRoute" activeStyle={{color: '#0070D1'}}>Playstation 5</NavLink>
                    </Nav.Item>
                </Nav>
                <Navbar.Brand>
                    <SearchIcon color={"#c4c4c4"}/>
                </Navbar.Brand>
            </Navbar>
            </Container>
        </HeaderBody>

    )
}

export default Header