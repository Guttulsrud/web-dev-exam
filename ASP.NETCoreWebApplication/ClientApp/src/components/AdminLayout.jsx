import React, {useContext} from 'react';
import Sidebar from './pages/Dashboard/Sidebar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {CogIcon, HeaderTop, Logo} from './layouts/Header/style';
import {Link} from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';
import PropTypes from 'prop-types';

const Layout = ({children}) => {
    const {user} = useContext(AuthContext);

    return (
        <React.Fragment>
            <HeaderTop>
                <p className={'text-white my-auto'}>Logged in as: {user}</p>
                <CogIcon as={Link} to={'/admin'}/>
                <a href={'http://www.sony.com/'}>
                    <Logo/>
                </a>
            </HeaderTop>
            <Container fluid>
                <Row>
                    <Col xs={12} md={3} lg={2} className={'sidebar-wrapper'}>
                        <Sidebar/>
                    </Col>
                    <Col xs={12} md={9} lg={10} className={'page-content-wrapper '}>
                        {children}
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
};

Layout.propTypes = {
    children: PropTypes.node
}

export default Layout;