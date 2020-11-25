import React, {useState} from 'react';
import Col from 'react-bootstrap/Col';
import {CardWrapper, TitleText} from './style';

const GameCard = ({image, title, isActive}) => {
    const [isHovered, setHovered] = useState(false)
    return (
        <CardWrapper backgroundImage={image} onMouseOver={() => setHovered(true) } onMouseLeave={() => setHovered(false)} isActive={isActive}>
            <TitleText className={"text-white"}>{title}</TitleText>
            {isHovered && <h1>kek</h1>}
        </CardWrapper>

    )
}

export default GameCard