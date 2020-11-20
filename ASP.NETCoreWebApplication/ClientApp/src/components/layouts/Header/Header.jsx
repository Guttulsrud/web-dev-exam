import React from 'react';
import Navbar from 'react-bootstrap/cjs/Navbar';
import Nav from 'react-bootstrap/cjs/Nav';
import {Link, useLocation} from 'react-router-dom';
import {HeaderBody} from './style';

import PsLogo from "./PsLogo";


import Container from 'react-bootstrap/Container';


const Header = () => {
    const location = useLocation()
    console.log(location.pathname)
    let whiteText = location.pathname === "/login"
    return (

        <HeaderBody>
            <Container >
            <Navbar className={"d-flex justify-content-between pl-0 pr-0"} style={{width: "100%"}}>
                <Navbar.Brand>
                    <PsLogo isWhite={whiteText}/>
                </Navbar.Brand>
                <Nav>
                    <Nav.Item>
                        <Nav.Link tag={Link} className={`${whiteText ? "text-white" : undefined}`} >Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link tag={Link} className={`${whiteText ? "text-white" : undefined}`}>Games</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link tag={Link} className={`${whiteText ? "text-white" : undefined}`}>About Playstation</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link tag={Link} href={"/login"} className={`${whiteText ? "text-white" : undefined}`}>Sign in</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
            </Container>
        </HeaderBody>

    )
}

export default Header