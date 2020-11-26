import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import FeaturedItem from "./FeaturedItem";

const FeaturedCarousel = (props) => {

    const getData = () => {
        return props.data.map((item, i) => {
            return <Carousel.Item><FeaturedItem key={i} {...item}/></Carousel.Item>
        });
    }

    return (
        <Carousel style={{height: "700px"}}>
            {getData()}
        </Carousel>
    )
}

export default FeaturedCarousel;