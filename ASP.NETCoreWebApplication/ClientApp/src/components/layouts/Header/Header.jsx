import React, {useContext, useState} from 'react';
import Navbar from 'react-bootstrap/cjs/Navbar';
import Nav from 'react-bootstrap/cjs/Nav';
import {NavLink, Link, useLocation} from 'react-router-dom';
import {HeaderBody, HeaderTop, Logo, CogIcon, DesktopNav} from './style';
import MobileNav from './MobileNav';

import PsLogo from './PsLogo';

import Container from 'react-bootstrap/Container';
import SearchIcon from './SearchIcon';
import Search from '../../common/Search';
import {LayoutContext} from '../../../context/LayoutContext';

const Header = () => {
    const {isDark, handleDark} = useContext(LayoutContext);
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <React.Fragment>
            <HeaderBody style={{zIndex: '100000'}} isDark={isDark[0]}>
                <Container>
                    <DesktopNav>
                        <Navbar className={'d-flex justify-content-between pl-0 pr-0'} style={{width: '100%'}}>
                            <Navbar.Brand as={Link} to={'/'}>
                                <PsLogo color={'#0070D1'}></PsLogo>
                            </Navbar.Brand>
                            <Nav className={'d-flex justify-content-around pl-0 pr-0 header-links'}
                                 style={{width: '100%', fontSize: '1.1rem', fontWeight: '500'}}>
                                <Nav.Item>
                                    <NavLink exact to='/' activeClassName='activeRoute' activeStyle={{color: '#0070D1'}}>
                                        Home
                                    </NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink to='/games' activeClassName='activeRoute' activeStyle={{color: '#0070D1'}}>
                                        Explore Games
                                    </NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink to='/accessories' activeClassName='activeRoute'
                                             activeStyle={{color: '#0070D1'}}>Accessories</NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink to='/devices' activeClassName='activeRoute'
                                             activeStyle={{color: '#0070D1'}}>Playstation 5</NavLink>
                                </Nav.Item>
                            </Nav>
                            <Navbar.Brand style={{cursor: 'pointer'}} onClick={handleShow}>
                                <SearchIcon color={show ? '#0070D1' : '#0070D1'}/>
                            </Navbar.Brand>
                        </Navbar>
                    </DesktopNav>
                    <MobileNav/>
                </Container>
            </HeaderBody>
            <Search show={show} handleClose={() => handleClose()}/>
        </React.Fragment>

    );
};

export default Header;