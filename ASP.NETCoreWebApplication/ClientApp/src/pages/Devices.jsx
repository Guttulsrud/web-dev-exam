import React, {useEffect, useState} from 'react';

import ScreenShotSection from "../components/pages/Home/ScreenshotSection";
import {Section} from "../components/base/Section";
import Container from "react-bootstrap/Container";
import {SectionTitle} from "../components/base/SectionTitle";
import AccessoriesList from "../components/common/AccessoriesList";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import {SectionText} from "../components/base/SectionText";
import {Subtitle} from "../components/base/Subtitle";
import {Paragraph} from "../components/base/Paragraph";
import {Button} from "../components/base/Button";


export const Devices = () => {

    return (
        <React.Fragment>
            <Section style={{paddingTop: "60px"}}>
                <Container>
                    <Row className="d-flex align-content-center">

                        <SectionText className="col-6" center>Playstation®5</SectionText>
                        <SectionText className="col-6" center>Playstation®5 Digital</SectionText>
                    </Row>
                    <Row>
                        <Col md={7}>
                            <Row>
                                <Col lg={12}>
                                    <SectionTitle className="text-left" style={{fontSize: "120px"}}>Play has no
                                        limits™</SectionTitle>
                                    <Paragraph>Experience lightning-fast loading with an ultra-high speed SSD, deeper
                                        immersion
                                        with support for haptic feedback, adaptive triggers and 3D Audio*, and an
                                        all-new
                                        generation of incredible PlayStation® games.</Paragraph>
                                </Col>
                                <Col className="d-flex" md={5} xs={12}>
                                    <div className="device-disk-desktop-view" style={{
                                        backgroundImage: "url('ps5disk.png')",
                                        width: "100%",
                                        height: "70vh",
                                        backgroundPosition: "top",
                                        backgroundSize: "contain",
                                        backgroundRepeat: "no-repeat",
                                    }}/>
                                </Col>
                            </Row>

                            <Row className="d-flex align-content-center text-center">
                                <Col md={6} className="text-center">
                                    <SectionTitle style={{fontSize: "30px", paddingTop: "20px", paddingBottom: "0px"}}
                                                  center>4K and 8K</SectionTitle>
                                    <Paragraph>Play your favorite PS5 games on your stunning 4K TV. The PS5 console is
                                        compatible with 8K displays through HDMI 2.1 support.</Paragraph>
                                </Col>
                                <Col md={6} className="text-center">
                                    <SectionTitle style={{fontSize: "30px", paddingTop: "20px", paddingBottom: "0px"}}
                                                  center>Lightning speed</SectionTitle>
                                    <Paragraph>Harness the power of a custom CPU, GPU and SSD with Integrated I/O that
                                        rewrite the rules of what a PlayStation console can do. </Paragraph>
                                </Col>
                            </Row>
                            <Row className="d-flex align-content-center text-center">
                                <Col md={6} className="text-center">
                                    <SectionTitle style={{fontSize: "30px", paddingTop: "20px", paddingBottom: "0px"}}
                                                  center>Ray tracing</SectionTitle>
                                    <Paragraph>Immerse yourself in worlds with a new level of realism as rays of light
                                        are individually simulated, creating true-to-life shadows and reflections in
                                        supported PS5 games.</Paragraph>
                                </Col>
                                <Col md={6} className="text-center">
                                    <SectionTitle style={{fontSize: "30px", paddingTop: "20px", paddingBottom: "0px"}}
                                                  center>Haptic feedback</SectionTitle>
                                    <Paragraph>Experience haptic feedback via the DualSense wireless controller in
                                        select PS5 titles and feel the effects and impact of your in-game actions
                                        through dynamic sensory feedback.</Paragraph>
                                </Col>
                            </Row>
                            <Row className="d-flex align-content-center text-center">
                                <Col md={6} className="text-center">
                                    <SectionTitle style={{fontSize: "30px", paddingTop: "20px", paddingBottom: "0px"}}
                                                  center>120Hz</SectionTitle>
                                    <Paragraph>Enjoy smooth and fluid high frame rate gameplay at up to 120fps for
                                        compatible games, with support for 120Hz output on 4K displays.</Paragraph>
                                </Col>
                                <Col md={6} className="text-center">
                                    <SectionTitle style={{fontSize: "30px", paddingTop: "20px", paddingBottom: "0px"}}
                                                  center>HDR technology</SectionTitle>
                                    <Paragraph>With an HDR TV, supported PS5 games display an unbelievably vibrant and
                                        lifelike range of colors.</Paragraph>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="d-flex" md={5} xs={12}>
                            <div className="device-disk-phone-view" style={{
                                backgroundImage: "url('ps5disk.png')",
                                width: "100%",
                                height: "126vh",
                                backgroundPosition: "top",
                                backgroundSize: "contain",
                                backgroundRepeat: "no-repeat",
                            }}/>
                        </Col>
                    </Row>

                </Container>
            </Section>
        </React.Fragment>
    );
};