import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {CarouselOverlay} from "./style";

const FeaturedItem = ({title, description, backgroundImage}) => {

    return (
        <div style={{height: "100vh", position: "relative"}}>



            <CarouselOverlay backgroundImage={backgroundImage}/>

            <Carousel.Caption style={{position: "absolute", top: "100px", height: "100%"}}>

                <h3 style={{fontSize: "8rem", lineHeight: "7rem", textAlign: "left", fontWeight: "bold"}}>{title}</h3>
                <p style={{textAlign: "left"}}>{description}</p>


            </Carousel.Caption>
    x
        </div>

    )
}

export default FeaturedItem;