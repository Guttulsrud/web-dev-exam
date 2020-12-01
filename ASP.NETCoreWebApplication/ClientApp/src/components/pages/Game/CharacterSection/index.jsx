import React from 'react';
import {Section} from "../../../base/Section";
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Paragraph} from "../../../base/Paragraph";

const CharacterSection = () => {
    return (
        <Section>
            <Container>
                <Row className={"d-flex align-items-center"}>
                    <Col lg={"6"}>
                        <Paragraph>
                            Character SECTION
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

export default CharacterSection;