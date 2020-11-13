import React from 'react';
import Navbar from 'react-bootstrap/cjs/Navbar';
import Nav from 'react-bootstrap/cjs/Nav';
import {Link} from 'react-router-dom';
import {HeaderBody} from './style';

const Header = () => {

    return (
        <HeaderBody>
            <Navbar>
                <Navbar.Brand>
                    Playstation 5
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
        </HeaderBody>
    )
}

export default Header