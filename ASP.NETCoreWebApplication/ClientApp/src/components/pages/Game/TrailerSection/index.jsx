import React from 'react';
import {Section} from "../../../base/Section";
import {Container} from "react-bootstrap";
import {Paragraph} from "../../../base/Paragraph";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {SignLogo} from "../../../common/SignLogo";
import {Subtitle} from "../../../base/Subtitle";

const TrailerSection = () => {
    return (
        <Section blue>
            <Container>
                <Subtitle right white>Game trailer</Subtitle>
                <Row className={"d-flex align-items-center pb-5"}>
                    <Col lg={"12"}>
                        <iframe width="100%" height="500" frameBorder="none"
                                src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=0&mute=1">
                        </iframe>
                    </Col>

                </Row>

            </Container>
        </Section>
    )
}

export default TrailerSection;