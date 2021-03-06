import React, {useContext} from 'react';
import {Section} from "../../../base/Section";
import {Container} from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Subtitle} from "../../../base/Subtitle";
import {SingleGameContext} from "../../../../context/SingleGameContext";

const TrailerSection = () => {
    const {game} = useContext(SingleGameContext);
    const [singleGame] = game
    return (
        <Section blue>
            <Container>
                <Subtitle right white>Game trailer</Subtitle>
                <Row className={"d-flex align-items-center pb-5"}>
                    <Col lg={"12"}>
                        <iframe title={"game trailer"} width="100%" height="600" frameBorder="none"
                                src={`${singleGame.trailerLink}?autoplay=0&mute=0`}>
                        </iframe>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

export default TrailerSection;