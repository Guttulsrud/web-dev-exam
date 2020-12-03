import React, {useContext} from 'react';
import {Section} from "../../../base/Section";
import {Container} from "react-bootstrap";
import {Paragraph} from "../../../base/Paragraph";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Subtitle} from "../../../base/Subtitle";
import {SingleGameContext} from "../../../../context/SingleGameContext";

const DeveloperSection = () => {
    const {game} = useContext(SingleGameContext);
    const [singleGame] = game

    return (
        <Section>
            <Container>
                <Row className={"d-flex align-items-center"}>
                    <Col lg={"6"}>
                        <Subtitle>Developer</Subtitle>
                        <Paragraph>{singleGame.developer}</Paragraph>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

export default DeveloperSection;