import React, {useContext} from 'react';
import {Section} from "../../../base/Section";
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Paragraph} from "../../../base/Paragraph";
import {Subtitle} from "../../../base/Subtitle";
import {EntityContext} from '../../../../context/EntityContext';
import {SingleGameContext} from '../../../../context/SingleGameContext';
import {CharacterTile} from './style';

const CharacterSection = () => {
    const {entities} = useContext(EntityContext)
    const {game, setGame} = useContext(SingleGameContext)
    const [characters, setCharacters] = entities

    const generateCharacters = () => {
        return characters.filter(character => character.game === game[0].title).map((character, index) => (
            <CharacterTile key={`character${index}`} image={character.image}>{character.name}</CharacterTile>
        ))
    }

    console.log(characters)

    return (
        <Section>
            <Container>
                <Row className={"d-flex align-items-center"}>
                    <Col lg={"6"}>
                        <Subtitle>Characters</Subtitle>
                    </Col>

                    <Col lg={"6"}>
                        {generateCharacters()}
                    </Col>

                </Row>

            </Container>
        </Section>
    )
}

export default CharacterSection;