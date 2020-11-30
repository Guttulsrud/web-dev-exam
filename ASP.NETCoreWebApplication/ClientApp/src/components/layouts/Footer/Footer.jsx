import React from 'react';
import {NavLink,Link, useLocation} from 'react-router-dom';
import {FooterBody, SieLogo, Author, PsFigures} from './style';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SonyLogo from "./SonyLogo";
import Container from 'react-bootstrap/Container';

const Footer = () => {
    return (
      <FooterBody className={"text-white"}>
          <Container>
              <Row className={"pt-5 pb-3 mt-5 mb-3"}>
                  <Col md={"6"} className={"d-flex"}>
                      <ul className={"footer-links"}>
                          <li><NavLink as={Link} to="/">Home</NavLink></li>
                          <li><NavLink as={Link} to="/games">Explore Games</NavLink></li>
                          <li> <NavLink as={Link} to="/psplus">PS Plus</NavLink></li>
                          <li> <NavLink as={Link} to="/accessories">Accessories</NavLink></li>
                          <li> <NavLink as={Link} to="/devices">Playstation 5</NavLink></li>
                      </ul>
                      <ul className={"footer-links links-spacer"}>
                          <li><NavLink as={Link} to="/login">Register</NavLink></li>
                          <li><NavLink as={Link} to="/login">Log in</NavLink></li>
                          <li><NavLink as={Link} to="/admin">Admin</NavLink></li>
                      </ul>
                  </Col>
                  <Col md={"6"} className={"d-flex justify-content-end align-content-center align-items-center"}>
                      <a href={"https://www.sie.com/"}><SieLogo/></a>
                  </Col>

                  <Col md={"12"} className={"mt-5 d-flex justify-content-center align-content-center align-items-center"}>
                      <PsFigures/>
                  </Col>
              </Row>
          </Container>

                      <Author>
                         Webutvikling 3, Eksamen, Høst 2020
                      </Author>


      </FooterBody>
    )
}

export default Footer