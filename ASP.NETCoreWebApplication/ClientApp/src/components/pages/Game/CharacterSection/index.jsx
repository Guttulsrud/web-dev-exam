import React, {useContext} from 'react';
import {Section} from "../../../base/Section";
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Subtitle} from "../../../base/Subtitle";
import {EntityContext} from '../../../../context/EntityContext';
import {SingleGameContext} from '../../../../context/SingleGameContext';
import {CharacterTile} from './style';
import GameCharacterList from "../../../common/GameCharacterList";

const CharacterSection = () => {
    const {entities} = useContext(EntityContext)
    const {game} = useContext(SingleGameContext)
    const [characters] = entities

    const generateCharacters = () => {
        return characters.filter(character => character.game === game[0].title).map((character, index) => (
            <CharacterTile key={`character${index}`} image={character.image}>{character.name}</CharacterTile>
        ))
    }


    return (
        <Section>
            <Container>
                <Row className={"d-flex align-items-center"}>
                    <Col lg={"12"}>
                        <Subtitle>Characters</Subtitle>
                    </Col>
                    <Col lg={"6"}>
                        {generateCharacters()}
                    </Col>
                </Row>
                 <GameCharacterList/>
            </Container>
        </Section>
    )
}

export default CharacterSection;