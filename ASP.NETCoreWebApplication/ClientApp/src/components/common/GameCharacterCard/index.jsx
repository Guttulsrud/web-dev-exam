import React from 'react';
import {Overlay, CharacterCard, CharacterCardWrapper, CharacterImage, CharacterName, CharacterCaption, CharacterDesc, WaveWrapper, CharacterWave} from "./style";
import Col from 'react-bootstrap/Col';



const GameCharacterCard = ({name, description, image}) => {
    return (
            <Col lg={4} style={{marginBottom: "30px"}}>
            <CharacterCardWrapper>
                <CharacterCard>
                    <CharacterImage backgroundImage={image}>
                        <Overlay>
                            <CharacterWave></CharacterWave>
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

export default GameCharacterCard;