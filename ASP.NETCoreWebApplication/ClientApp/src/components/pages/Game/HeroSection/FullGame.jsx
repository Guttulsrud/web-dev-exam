import React, {useState} from 'react';
import { motion } from "framer-motion"

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
    RadialGradient
} from './style';
import ScreenThumb from "./ScreenThumb";

const FullGame = () => {
    return (
        <React.Fragment>
            <motion.div
                initial={{ x: 0, opacity: 0}}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 2, delay: 0 }}
            >

            <HeroWrapper backgroundImage={"forbidden-west.jpg"}>
                <Container>
                <SignLogo backgroundImage={"signlogo.png"}></SignLogo>

                    <motion.div
                                initial={{ x: -300, opacity: 0}}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 2, delay: 1.5 }}
                    >

                <TitleText>Horizon <br></br><span style={{color: "#0070D1"}}>Forbidden West</span></TitleText>

                        <motion.div
                            initial={{ x: 0, opacity: 0}}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 2, delay: 4 }}
                        >
                <TitleDesc>In an era where Machines roam the land and mankind is no longer the dominant species,
                    a young hunter named Aloy embarks on a journey to discover her destiny.</TitleDesc>
                    <TitleCat>Adventure</TitleCat>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ x: 300, opacity: 0}}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2, delay: 3 }}
                    >
                <div>

                    <motion.div
                        initial={{ x: 0, opacity: 0}}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2, delay: 4.5 }}
                    >
                <Caption>Screenshots</Caption>
                    </motion.div>
                <ThumbWrapper>

                    <ScreenThumb image={"forbidden-west.jpg"}/>
                    <ScreenThumb image={"forbidden-west.jpg"}/>
                    <ScreenThumb image={"forbidden-west.jpg"}/>
                </ThumbWrapper>
                </div>
                    </motion.div>

                </Container>
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
            </motion.div>
        </React.Fragment>
    )
}

export default FullGame;