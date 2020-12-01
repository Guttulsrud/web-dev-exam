import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {CarouselOverlay, CardBack, CarouselImage, CarouselTitle, CarouselDesc} from "./style";
import {Container} from "react-bootstrap";
import {Button} from "../../../base/Button";
import {Link} from 'react-router-dom';


const FeaturedItem = ({id, title, description, backgroundImage}) => {

    return (
        <div style={{position: "relative"}}>
            <Container style={{position: "relative"}}>
                <div className={"d-flex align-content-center align-items-center"}>
                        <Carousel.Caption style={{position: "absolute", left: "0", zIndex: "20000", top: "200px", height: "100%"}}>
                            <h3 style={{fontSize: "8rem", lineHeight: "7rem", textAlign: "left", fontWeight: "bold", textShadow: "0px 0px 10px 0px rgba(0,0,0,0.50)"}}></h3>
                            <CarouselTitle>
                                {title}
                            </CarouselTitle>
                            <CarouselDesc>
                                {description}
                            </CarouselDesc>
                            <Button as={Link} to={`/games/detail/${id}`} outline>More</Button>
                        </Carousel.Caption>

                        <CarouselImage>
                            <CardBack/>
                            <CarouselOverlay backgroundImage={backgroundImage}/>
                        </CarouselImage>
                </div>
            </Container>
        </div>

    )
}

export default FeaturedItem;