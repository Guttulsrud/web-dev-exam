import React from 'react';
import {Section} from "../../../base/Section";
import {Container} from "react-bootstrap";
import {Paragraph} from "../../../base/Paragraph";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Subtitle} from "../../../base/Subtitle";
import {BoxArt, BoxArtWrapper, Price} from "./style";

const InfoSection = () => {
    return (
        <Section>
            <Container>
                <Subtitle>Unleash some pussy</Subtitle>
                <Row className={"d-flex align-items-center align-content-center"}>

                    <Col lg={"6"} >
                        <div style={{backgroundColor: "#ff00cc"}}>


                        <Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </Paragraph>
                        </div>
                    </Col>

                    <Col lg={"6"} className={"d-flex justify-content-center"}>

                        <BoxArtWrapper>
                            <BoxArt backgroundImage={"horizonbox.jpg"}></BoxArt>
                            <Price>Price $89</Price>
                        </BoxArtWrapper>

                    </Col>

                </Row>

            </Container>
        </Section>
    )
}

export default InfoSection;