import React, {useState} from 'react';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {
    HeroWrapper,
    ThumbWrapper,
    TitleText,
    TitleDesc,
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
import ParallaxCard from "react-parallax-card";
import {motion} from "framer-motion";

const FullGame3 = () => {
    return (
        <React.Fragment>

            <HeroWrapper>
                <RadialGradient></RadialGradient>
                <SignLogo backgroundImage={"signlogo.png"}></SignLogo>

                <ParallaxImage backgroundImage={"aloy.png"}></ParallaxImage>

                <Container>

                    <div style={{position: "relative", top: "100px"}}>
                        <TitleText zIndex={"9"} fontSize={"15"} color={"#000"} lineHeight={"12"}>Horizon</TitleText>
                        <TitleText zIndex={"1000000"} fontSize={"12"} lineHeight={"3"} color={"#0070D1"}>Zero Dawn</TitleText>

                        <TitleCat>Action Adventure</TitleCat>
                    </div>

                    <div style={{marginTop: "250px"}}>

                        <Caption>Screenshots</Caption>

                        <ThumbWrapper>
                            <ScreenThumb image={"forbidden-west.jpg"}/>
                            <ScreenThumb image={"forbidden-west.jpg"}/>
                            <ScreenThumb image={"forbidden-west.jpg"}/>
                        </ThumbWrapper>
                    </div>

                </Container>

                <SignLogoSmall></SignLogoSmall>

            </HeroWrapper>

            <SectionWrapper>
                <Container>

                    <TitleSection>All Games</TitleSection>
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