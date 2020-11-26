import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {CarouselOverlay, CardBack, CarouselImage} from "./style";
import {Container} from "react-bootstrap";


const FeaturedItem = ({title, description, backgroundImage}) => {

    return (
        <div style={{position: "relative"}}>
            <Container style={{position: "relative"}}>
                <div className={"d-flex align-content-center align-items-center"}>
                        <Carousel.Caption style={{position: "absolute", left: "0", zIndex: "20000", top: "100px", height: "100%"}}>
                            <h3 style={{fontSize: "8rem", lineHeight: "7rem", textAlign: "left", fontWeight: "bold"}}>{title}</h3>
                            <p>{description}</p>
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