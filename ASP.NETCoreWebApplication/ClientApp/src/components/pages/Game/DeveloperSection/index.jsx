import React from 'react';
import {Section} from "../../../base/Section";
import {Container} from "react-bootstrap";
import {Paragraph} from "../../../base/Paragraph";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Subtitle} from "../../../base/Subtitle";

const DeveloperSection = () => {
    return (
        <Section>
            <Container>
                <Row className={"d-flex align-items-center"}>
                    <Col lg={"6"}>
                        <Subtitle>Developer</Subtitle>
                        <Paragraph>Guerilla</Paragraph>
                    </Col>

                </Row>

            </Container>
        </Section>
    )
}

export default DeveloperSection;