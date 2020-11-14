import React from 'react';
import Navbar from 'react-bootstrap/cjs/Navbar';
import Nav from 'react-bootstrap/cjs/Nav';
import {Link} from 'react-router-dom';
import {HeaderBody} from './style';

import PsLogo from "./PsLogo";


import Container from 'react-bootstrap/Container';

const Header = () => {

    return (

        <HeaderBody>
            <Container>
            <Navbar className={"d-flex justify-content-between pl-0 pr-0"} style={{width: "100%"}}>
                <Navbar.Brand>
                    <PsLogo></PsLogo>
                </Navbar.Brand>
                <Nav>
                    <Nav.Item>
                        <Nav.Link tag={Link}>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link tag={Link}>Games</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link tag={Link}>About Playstation</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
            </Container>
        </HeaderBody>

    )
}

export default Header