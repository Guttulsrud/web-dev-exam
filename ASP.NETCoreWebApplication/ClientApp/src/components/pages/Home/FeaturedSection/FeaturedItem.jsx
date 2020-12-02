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

const FeaturedItem = ({title, description, backgroundImage}) => {

    return (
        <React.Fragment>

            <Container>
                <div style={{position: "relative", height: "600px"}}>

                    <CardBack><SignLogo></SignLogo><LogoWrapper normal><Ps5Logo></Ps5Logo></LogoWrapper></CardBack>
                    <CarouselImage backgroundImage={backgroundImage}>

                        <CarouselCaption>
                            <CarouselTitle>{title}</CarouselTitle>
                            <CarouselDescription>{description}</CarouselDescription>
                            <Button isWhite outline>More</Button>
                        </CarouselCaption>
                    </CarouselImage>
                </div>

            </Container>

        </React.Fragment>

    )
}

export default FeaturedItem;