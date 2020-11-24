import React, {useState, useEffect} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import {
    HeroWrapper,
    ThumbWrapper,
    TitleText,
    TitleCat,
    TitleSection,
    Caption,
    SignLogo,
    SectionWrapper,
    Card,
    CardTitle,
    RadialGradient,
    SignLogoSmall,
    ParallaxImage
} from './style3';
import ScreenThumb from "./ScreenThumb";



const FullGame3 = () => {
    const [offset, setOffset] = useState(0)
    useEffect(() => {
        function handleScroll() {
            setOffset(window.pageYOffset)
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (

        <React.Fragment>

            <HeroWrapper>

                <RadialGradient></RadialGradient>
                <SignLogo backgroundImage={"signlogo.png"} style={{transform: `translateY(${offset * 0.2}px)`}}></SignLogo>

                <ParallaxImage backgroundImage={"aloy.png"} style={{transform: `translateY(${offset * 0.4}px)`}}></ParallaxImage>
                <Container>

                    <div style={{position: "relative", top: "100px"}}>

                        <TitleText zIndex={"9"} fontSize={"15"} color={"#000"} lineHeight={"12"}>Horizon</TitleText>
                        <TitleText zIndex={"1000000"} fontSize={"14"} lineHeight={"3"} color={"#0070D1"} style={{transform: `translateY(${offset * 0.2}px)`}}>Zero Dawn</TitleText>

                        <TitleCat style={{transform: `translateY(${offset * 0.3}px)`}}>Action Adventure</TitleCat>
                    </div>

                    <div style={{marginTop: "250px"}}>

                        <Caption style={{transform: `translateY(${offset * 0.05}px)`}}>Screenshots</Caption>

                        <ThumbWrapper>
                            <ScreenThumb image={"screenshots/horizon/1.jpg"}/>
                            <ScreenThumb image={"screenshots/horizon/2.jpg"}/>
                            <ScreenThumb image={"screenshots/horizon/3.jpg"}/>
                        </ThumbWrapper>
                    </div>

                </Container>

                <SignLogoSmall></SignLogoSmall>


            </HeroWrapper>

            <SectionWrapper>

                <Container>

                    <TitleSection style={{transform: `translateY(${offset * 0.09}px)`}}>All Games</TitleSection>
                    <Row>
                        <Col sm={12} md={6} lg={3} style={{ marginBottom: "30px"}}>
                            <Card backgroundImage={"demons.jpg"}>
                                <CardTitle className={"text-white"}>Demons Souls</CardTitle>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={3} style={{ marginBottom: "30px"}}>
                            <Card backgroundImage={"forbidden-west.jpg"}>
                                <CardTitle className={"text-white"}>Horizon Forbidden West</CardTitle>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={3} style={{ marginBottom: "30px"}}>
                            <Card backgroundImage={"cyber.jpg"}>
                                <CardTitle className={"text-white"}>Cyberpunk 2077</CardTitle>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={3} style={{ marginBottom: "30px"}}>
                            <Card backgroundImage={"ratchet.jpg"}>
                                <CardTitle className={"text-white"}>Ratchet & Clank</CardTitle>
                            </Card>
                        </Col>
                    </Row>

                    </Container>
            </SectionWrapper>

        </React.Fragment>
    )
}

export default FullGame3;