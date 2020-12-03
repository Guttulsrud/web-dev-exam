import React, {useContext} from 'react';
import Row from 'react-bootstrap/Row';
import {EntityContext} from "../../../context/EntityContext";
import {SingleGameContext} from "../../../context/SingleGameContext";
import GameCharacterCard from "../GameCharacterCard";


const GameCharacterList = () => {
    const {entities} = useContext(EntityContext)
    const {game} = useContext(SingleGameContext)
    const [characters] = entities

    const generateCharacters = () => {
        return characters.filter(character => character.game === game[0].title).map((character, index) => (
            <GameCharacterCard key={`character${index}`} image={character.image} name={character.name}
                               description={character.description}/>
        ))
    }

    return (
        <Row>
            {generateCharacters()}
        </Row>
    )

}

export default GameCharacterList;