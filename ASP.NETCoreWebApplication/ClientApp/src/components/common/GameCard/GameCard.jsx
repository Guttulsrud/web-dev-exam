import React, {useState} from 'react';
import Col from 'react-bootstrap/Col';
import { useSpring, animated } from 'react-spring';
import {CardWrapper, Card, CardContainer, CardTitle, CardCategory, Hover, CardImage, CardBack, Overlay, SignLogo, LogoWrapper, CardYear} from './style';
import Ps5Logo from "./Ps5Logo";
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";

const calc = (x, y) => [-(y - window.innerHeight / 2) / 60, (x - window.innerWidth / 2) / 60, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const GameCard = ({id,title, year, category,featureImage}) => {
    const [isHovered, setHovered] = useState(false);
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 1, tension: 700, friction: 20 } }))


    return (

        <Col xs={12} lg={3} style={{ marginBottom: "30px"}}>

            <Link to={`/games/detail/${id}`}>

            <CardWrapper onMouseOver={() => setHovered(true) } onMouseLeave={() => setHovered(false)} style={{zIndex: isHovered ? "9999999999" : "100000"}}>
                <animated.div
                    onMouseMove={({clientX: x, clientY: y}) => set({xys: calc(x, y)})}
                    onMouseLeave={() => set({xys: [0, 0, 1]})}
                    style={{transform: props.xys.interpolate(trans)}}
                >
            <Card>

                <CardImage backgroundImage={featureImage}/>
                <Overlay>
                    <CardContainer>

                        <CardTitle>{title}</CardTitle>
                        <CardYear>Release: {year}</CardYear>
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

GameCard.propTypes = {
    id: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    featureImage: PropTypes.string.isRequired
}

export default GameCard;