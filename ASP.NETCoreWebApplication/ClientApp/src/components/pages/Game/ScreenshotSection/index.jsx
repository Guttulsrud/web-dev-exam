import React from 'react';
import {Section} from "../../../base/Section";
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Paragraph} from "../../../base/Paragraph";
import {Subtitle} from "../../../base/Subtitle";

const ScreenshotSection = () => {
    return (
        <Section paddingTop={30}>
            <Container>
                <Row className={"d-flex align-items-center"}>
                    <Col lg={"6"}>
                        <Subtitle>Screenshots</Subtitle>
                    </Col>

                    <Col lg={"6"}>
                        <div style={{backgroundColor: "#ff00cc", width: "500px", height: "500px"}}></div>
                    </Col>

                </Row>

            </Container>
        </Section>
    )
}

export default ScreenshotSection;