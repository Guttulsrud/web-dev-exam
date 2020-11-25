import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {CarouselOverlay} from "./style";

const FeaturedItem = ({title, description, backgroundImage}) => {

    return (
        <div style={{height: "800px", position: "relative"}}>



            <CarouselOverlay backgroundImage={backgroundImage}/>

            <Carousel.Caption>

                <h3>{title}</h3>
                <p>{description}</p>


            </Carousel.Caption>
    x
        </div>

    )
}

export default FeaturedItem;