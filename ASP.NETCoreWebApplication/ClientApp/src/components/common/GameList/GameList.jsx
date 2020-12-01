import React, {useContext} from 'react';
import Row from 'react-bootstrap/Row';
import GameCard from "../GameCard/GameCard";
import {EntityContext} from '../../../context/EntityContext';
import {Link} from 'react-router-dom';


const GameList = (props) => {
    const {entities} = useContext(EntityContext)
    const generateGames = () => {
        return entities[0].map((game, i) => {
            return <GameCard key={i} {...game}/>
        });
    }

    return (
        <Row>
            {generateGames()}
        </Row>
    )
}

export default GameList;