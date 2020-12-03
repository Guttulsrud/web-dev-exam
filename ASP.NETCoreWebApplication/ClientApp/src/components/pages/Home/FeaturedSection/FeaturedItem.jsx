import React from 'react';
import {
    CardBack,
    CarouselImage,
    CarouselTitle,
    CarouselCaption,
    CarouselDescription, SignLogo, LogoWrapper
} from './style';
import {Container} from 'react-bootstrap';
import {Button} from '../../../base/Button';
import Ps5Logo from '../../../common/GameCard/Ps5Logo';
import {useHistory} from 'react-router';
import PropTypes from 'prop-types';

const FeaturedItem = ({id, title, description, featureImage}) => {

    const history = useHistory();

    return (
        <Container>
            <div style={{position: 'relative', height: '650px'}}>
                <CardBack><SignLogo/><LogoWrapper normal><Ps5Logo/></LogoWrapper></CardBack>
                <CarouselImage backgroundImage={featureImage}>
                    <CarouselCaption>
                        <CarouselTitle>{title}</CarouselTitle>
                        <CarouselDescription>{description}</CarouselDescription>
                        <Button isWhite outline onClick={() => history.push(`/games/detail/${id}`)}>Read More</Button>
                    </CarouselCaption>
                </CarouselImage>
            </div>
        </Container>
    );
};

FeaturedItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    featureImage: PropTypes.string.isRequired
};

export default FeaturedItem;