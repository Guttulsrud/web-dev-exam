import React from 'react';
import Col from 'react-bootstrap/Col';
import {Thumb} from './style';

const GameThumb = ({backgroundImage}) => {
    return (
        <Col xs={6} s={6} md={6} lg={4} style={{ marginBottom: "30px"}}>
            <Thumb backgroundImage={backgroundImage}/>
        </Col>

    )
}

export default GameThumb;