import React, {useState} from 'react';
import Col from 'react-bootstrap/Col';
import {CardWrapper, Card, CardContainer, CardTitle, CardCategory, Hover, CardImage, CardBack, Overlay, SignLogo, LogoWrapper} from './style';
import Ps5Logo from "./Ps5Logo";


const GameCard = ({id,title,category,backgroundImage}) => {
    const [isHovered, setHovered] = useState(false);

    return (
        <Col xs={12} lg={3} style={{ marginBottom: "30px"}}>

        <CardWrapper onMouseOver={() => setHovered(true) } onMouseLeave={() => setHovered(false)} style={{zIndex: isHovered ? "9999999999" : "100000"}}>
            <Card>

                <CardImage backgroundImage={backgroundImage}/>
                <Overlay>
                    <CardContainer>

                        <CardTitle>{title}</CardTitle>
                        <Hover>
                            <CardCategory>{category}</CardCategory>
                        </Hover>
                    </CardContainer>
                </Overlay>
            </Card>

            <CardBack><SignLogo/>     <LogoWrapper><Ps5Logo/></LogoWrapper></CardBack>
        </CardWrapper>
        </Col>

    )
}

export default GameCard;