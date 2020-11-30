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
              <Row className={"pt-5 pb-5 mt-5 mb-5"}>
                  <Col md={"6"}>
                      <ul className={"footer-links"}>
                          <li><NavLink as={Link} to="/">Home</NavLink></li>
                          <li><NavLink as={Link} to="/games">Explore Games</NavLink></li>
                          <li> <NavLink as={Link} to="/psplus">PS Plus</NavLink></li>
                          <li> <NavLink as={Link} to="/accessories">Accessories</NavLink></li>
                          <li> <NavLink as={Link} to="/playstation">Playstation 5</NavLink></li>
                      </ul>
                  </Col>
                  <Col md={"6"} className={"d-flex justify-content-end align-content-center align-items-center"}>
                      <a href={"https://www.sie.com/"}><SieLogo/></a>
                  </Col>

                  <Col md={"12"} className={"d-flex justify-content-center align-content-center align-items-center"}>
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