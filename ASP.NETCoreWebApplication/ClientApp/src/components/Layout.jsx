import React, {useEffect, useState} from 'react';
import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';
import {RadialGradient} from "./common/RadialGradient";
import {SignLogo} from "./common/SignLogo";

const Layout = ({children}) => {
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

            <Header/>
                {children}
            <Footer/>
        </React.Fragment>
    );
};

export default Layout;