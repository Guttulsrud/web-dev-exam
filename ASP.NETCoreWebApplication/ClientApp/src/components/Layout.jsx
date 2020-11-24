import React from 'react';
import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';

const Layout = ({children}) => {
    return (
        <React.Fragment>
            <Header/>
                {children}
            <Footer/>
        </React.Fragment>
    );
};

export default Layout;