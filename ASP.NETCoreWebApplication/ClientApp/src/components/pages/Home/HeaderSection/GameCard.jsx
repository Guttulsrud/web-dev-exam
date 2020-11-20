import React, {useState} from 'react';
import Col from 'react-bootstrap/Col';
import {CardWrapper, TitleText} from './style';

const GameCard = ({image, title}) => {
    const [isHovered, setHovered] = useState(false)
    return (
        <CardWrapper backgroundImage={image} onMouseOver={() => setHovered(true) } onMouseLeave={() => setHovered(false)}>
            <TitleText className={"text-white"}>{title}</TitleText>
            {isHovered && <h1>kek</h1>}
        </CardWrapper>

    )
}

export default GameCard