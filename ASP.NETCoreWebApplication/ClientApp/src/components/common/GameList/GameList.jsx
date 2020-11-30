import React from 'react';
import Row from 'react-bootstrap/Row';
import GameCard from "../GameCard/GameCard";


const GameList = (props) => {
    const getData = () => {
        return props.data.map((game, i) => {
            return <GameCard key={i} {...game}/>
        });
    }

    return (
        <Row>
            {getData()}
        </Row>
    )
}

export default GameList;