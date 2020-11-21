import React from 'react';
import Row from 'react-bootstrap/Row';
import GameThumb from "../GameThumb/GameThumb";

const GameThumbList = (props) => {

    const getData = () => {
        return props.data.map((thumb, i) => {
            return <GameThumb key={i} {...thumb}/>
        });
    }

    return (
        <Row>
            {getData()}
        </Row>
    )
}

export default GameThumbList;