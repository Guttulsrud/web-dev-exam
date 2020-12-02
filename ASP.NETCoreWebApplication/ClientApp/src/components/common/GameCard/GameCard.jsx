import React, {useState} from 'react';
import Col from 'react-bootstrap/Col';

import { useSpring, animated } from 'react-spring';
import {CardWrapper, Card, CardContainer, CardTitle, CardCategory, Hover, CardImage, CardBack, Overlay, SignLogo, LogoWrapper} from './style';
import Ps5Logo from "./Ps5Logo";
import {Link} from 'react-router-dom';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 60, (x - window.innerWidth / 2) / 60, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const GameCard = ({id,title, year, category,backgroundImage}) => {
    const [isHovered, setHovered] = useState(false);
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 1, tension: 700, friction: 20 } }))


    return (

        <Col xs={12} lg={3} className={"col-margin"}>

            <Link to={`games/detail/${id}`}>

            <CardWrapper onMouseOver={() => setHovered(true) } onMouseLeave={() => setHovered(false)} style={{zIndex: isHovered ? "9999999999" : "100000"}}>
                <animated.div
                    onMouseMove={({clientX: x, clientY: y}) => set({xys: calc(x, y)})}
                    onMouseLeave={() => set({xys: [0, 0, 1]})}
                    style={{transform: props.xys.interpolate(trans)}}
                >
            <Card>

                <CardImage backgroundImage={backgroundImage}/>
                <Overlay>
                    <CardContainer>

                        <CardTitle>{title}</CardTitle>
                        <CardTitle>{year}</CardTitle>
                        <Hover>
                            <CardCategory>{category}</CardCategory>
                        </Hover>
                    </CardContainer>
                </Overlay>

            </Card>

                <CardBack>
                    <SignLogo/>
                    <LogoWrapper>
                        <Ps5Logo/>
                    </LogoWrapper>
                </CardBack>

                </animated.div>
        </CardWrapper>
            </Link>
        </Col>

    )
}

export default GameCard;