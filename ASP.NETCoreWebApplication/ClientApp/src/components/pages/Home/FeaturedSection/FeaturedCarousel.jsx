import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import FeaturedItem from "./FeaturedItem";

const FeaturedCarousel = (props) => {

    const getData = () => {
        return props.data.map((item, i) => {
            return <Carousel.Item key={i}><FeaturedItem {...item}/></Carousel.Item>
        });
    }

    return (
        <Carousel>
            {getData()}
        </Carousel>
    )
}

export default FeaturedCarousel;