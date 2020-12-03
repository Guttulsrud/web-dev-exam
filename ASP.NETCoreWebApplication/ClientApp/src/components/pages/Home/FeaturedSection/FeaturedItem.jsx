import React from 'react';
import {
    CardBack,
    CarouselImage,
    CarouselTitle,
    CarouselCaption,
    CarouselDescription, SignLogo, LogoWrapper
} from "./style";
import {Container} from "react-bootstrap";
import {Button} from "../../../base/Button";
import Ps5Logo from "../../../common/GameCard/Ps5Logo";
import {useHistory} from 'react-router';

const FeaturedItem = ({id, title, description, featureImage}) => {

 const history = useHistory()

    return (
        <React.Fragment>

            <Container>
                <div style={{position: "relative", height: "600px"}}>

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

        </React.Fragment>

    )
}

export default FeaturedItem;