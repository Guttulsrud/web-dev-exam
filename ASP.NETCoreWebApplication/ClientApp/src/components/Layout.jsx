import React, {useContext, useEffect, useState} from 'react';
import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';
import {RadialGradient} from "./common/RadialGradient";
import {SignLogo} from "./common/SignLogo";
import {CogIcon, HeaderTop, Logo} from "./layouts/Header/style";
import {Link} from "react-router-dom";
import {AuthContext} from '../context/AuthContext';
import PropTypes from 'prop-types';

const Layout = ({children}) => {
    const {isLoggedIn, user} = useContext(AuthContext)
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        function handleScroll() {
            setOffset(window.pageYOffset)
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, []);

    return (
        <React.Fragment>
            <RadialGradient style={{zIndex: "-100"}}/>
            <SignLogo style={{zIndex: "-99", transform: `rotate(20deg) translateY(${offset * 0.4}px)`}}/>
            <HeaderTop>
                {isLoggedIn && <p className={"text-white my-auto"}>Logged in as: {user}</p>}
                <CogIcon as={Link} to={isLoggedIn ? "/admin" : "/login"}/>
                <a href={"http://www.sony.com/"}><Logo/></a>
            </HeaderTop>
            <Header/>
                {children}
            <Footer/>
        </React.Fragment>
    );
};

Layout.propTypes = {
    children: PropTypes.node
}

export default Layout;