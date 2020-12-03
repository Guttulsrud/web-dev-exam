import React from 'react';
import {
    Overlay,
    CharacterCard,
    CharacterCardWrapper,
    CharacterImage,
    CharacterName,
    CharacterCaption,
    CharacterDesc,
    CharacterWave
} from "./style";
import Col from 'react-bootstrap/Col';
import PropTypes from "prop-types"


const GameCharacterCard = ({name, description, image}) => {
    return (
        <Col lg={4} style={{marginBottom: "30px"}}>
            <CharacterCardWrapper>
                <CharacterCard>
                    <CharacterImage backgroundImage={image}>
                        <Overlay>
                            <CharacterWave/>
                        </Overlay>
                    </CharacterImage>

                    <CharacterCaption>
                        <CharacterName>{name}</CharacterName>
                        <CharacterDesc>{description}</CharacterDesc>
                    </CharacterCaption>
                </CharacterCard>
            </CharacterCardWrapper>
        </Col>
    )
}

GameCharacterCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}

export default GameCharacterCard;