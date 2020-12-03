import React from 'react';
import {Section} from "../../../base/Section";
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Subtitle} from "../../../base/Subtitle";
import GameCharacterList from "../../../common/GameCharacterList";

const CharacterSection = () => {

    return (
        <Section>
            <Container>
                <Row className={"d-flex align-items-center"}>
                    <Col lg={"12"}>
                        <Subtitle>Characters</Subtitle>
                    </Col>
                </Row>
                 <GameCharacterList/>
            </Container>
        </Section>
    )
}

export default CharacterSection;