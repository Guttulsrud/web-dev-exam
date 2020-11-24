import React from 'react';
import Navbar from 'react-bootstrap/cjs/Navbar';
import Nav from 'react-bootstrap/cjs/Nav';
import {Link} from 'react-router-dom';
import {HeaderBody} from './style';

import PsLogo from "./PsLogo";


import Container from 'react-bootstrap/Container';
import SearchIcon from "./SearchIcon";

const Header = () => {

    return (

        <HeaderBody style={{zIndex: "100000"}}>
            <Container>
            <Navbar className={"d-flex justify-content-between pl-0 pr-0"} style={{width: "100%"}}>
                <Navbar.Brand as={Link} to={"/"}>
                    <PsLogo color={"#0070D1"}></PsLogo>
                </Navbar.Brand>
                <Nav className={"d-flex justify-content-around pl-0 pr-0"} style={{width: "100%", fontSize: "1.1rem", fontWeight: "500"}}>
                    <Nav.Item>
                        <Nav.Link as={Link} to="#">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="#">Games</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="#">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/assets">Assets</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Navbar.Brand>
                    <SearchIcon color={"#0070D1"}/>
                </Navbar.Brand>
            </Navbar>
            </Container>
        </HeaderBody>

    )
}

export default Header