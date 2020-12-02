import React, {useContext} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import FeaturedItem from "./FeaturedItem";
import {EntityContext} from '../../../../context/EntityContext';

const FeaturedCarousel = (props) => {
    const {entities, loading} = useContext(EntityContext)
    const [games] = entities

    const getData = () => {
        return games.filter(game => game.isFeatured).map((game, i) => {
            return <Carousel.Item key={i}><FeaturedItem {...game}/></Carousel.Item>
        });
    }

    return (
        <Carousel>
            {getData()}
        </Carousel>
    )
}

export default FeaturedCarousel;