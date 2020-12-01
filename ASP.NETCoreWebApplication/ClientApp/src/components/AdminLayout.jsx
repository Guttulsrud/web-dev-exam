import React, {useEffect, useState} from 'react';
import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';
import {RadialGradient} from "./common/RadialGradient";
import {SignLogo} from "./common/SignLogo";
import Sidebar from "./pages/Dashboard/Sidebar";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
import {CogIcon, HeaderTop, Logo} from "./layouts/Header/style";
import {Link} from "react-router-dom";


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
            <HeaderTop><CogIcon as={Link} to={"/admin"}/><a href={"http://www.sony.com/"}><Logo/></a></HeaderTop>
            <Container fluid>
                <Row>
                    <Col xs={12} md={3} lg={2} className={"sidebar-wrapper"}>
                        <Sidebar/>
                    </Col>
                    <Col xs={12} md={9} lg={10} className={"page-content-wrapper "}>
                            {children}
                    </Col>
                </Row>

            </Container>




        </React.Fragment>
    );
};

export default Layout;