import React from 'react';
import {Section} from "../../../base/Section";
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Paragraph} from "../../../base/Paragraph";
import {Subtitle} from "../../../base/Subtitle";

const CharacterSection = () => {
    return (
        <Section>
            <Container>
                <Row className={"d-flex align-items-center"}>
                    <Col lg={"6"}>
                        <Subtitle>Characters</Subtitle>
                    </Col>

                    <Col lg={"6"}>
                    </Col>

                </Row>

            </Container>
        </Section>
    )
}

export default CharacterSection;