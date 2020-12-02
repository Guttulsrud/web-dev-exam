import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {
    CarouselOverlay,
    CardBack,
    CarouselImage,
    CarouselTitle,
    CarouselCaption,
    CarouselDesc,
    CarouselDescription, SignLogo, LogoWrapper
} from "./style2";
import {Container} from "react-bootstrap";
import {Button} from "../../../base/Button";
import {Link} from 'react-router-dom';
import Ps5Logo from "../../../common/GameCard/Ps5Logo";


const FeaturedItem = ({id, title, description, backgroundImage}) => {
    console.log(title);

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