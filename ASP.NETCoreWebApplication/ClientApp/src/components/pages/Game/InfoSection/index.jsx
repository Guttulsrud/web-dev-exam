import React from 'react';
import {Section} from "../../../base/Section";
import {Container} from "react-bootstrap";
import {Paragraph} from "../../../base/Paragraph";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const InfoSection = () => {
    return (
        <Section>
            <Container>
                <Row className={"d-flex align-items-center"}>
                    <Col lg={"6"}>
                        <Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </Paragraph>
                    </Col>

                    <Col lg={"6"}>
                        <div style={{backgroundColor: "#ff00cc", width: "500px", height: "500px"}}></div>
                    </Col>

                </Row>

            </Container>
        </Section>
    )
}

export default InfoSection;