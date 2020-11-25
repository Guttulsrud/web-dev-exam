import React from 'react';
import {FooterBody} from './style';
import SonyLogo from "./SonyLogo";
import Container from 'react-bootstrap/Container';

const Footer = () => {
    return (
      <FooterBody className={"text-white"}>
          <Container>
              <div className={"d-flex justify-content-center"}>
                  <a href={"http://www.sony.com/"}><SonyLogo/></a>
              </div>
          </Container>
      </FooterBody>
    )
}

export default Footer