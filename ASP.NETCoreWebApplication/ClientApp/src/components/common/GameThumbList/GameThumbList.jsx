import React, {useContext} from 'react';
import Row from 'react-bootstrap/Row';
import GameThumb from "../GameThumb/GameThumb";
import {SingleGameContext} from '../../../context/SingleGameContext';

const GameThumbList = (props) => {
    const {game} = useContext(SingleGameContext)
    const [gameState] = game


    const getData = () => {
        return gameState.screenshots ? gameState.screenshots.map((thumb, i) => {
            return <GameThumb key={i} image={thumb}/>
        }) : null
    }

    return (
        <Row>
            {getData()}
        </Row>
    )
}

export default GameThumbList;