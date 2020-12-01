import React from 'react';
import {Section} from "../../../base/Section";
import {Container} from "react-bootstrap";
import {Paragraph} from "../../../base/Paragraph";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const DeveloperSection = () => {
    return (
        <Section>
            <Container>
                <Row className={"d-flex align-items-center"}>
                    <Col lg={"6"}>
                        <Paragraph>
                            Developer Section
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

export default DeveloperSection;