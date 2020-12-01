import React, {useEffect, useState} from 'react';

import ScreenShotSection from "../components/pages/Home/ScreenshotSection";
import {Section} from "../components/base/Section";
import Container from "react-bootstrap/Container";
import {SectionTitle} from "../components/base/SectionTitle";
import AccessoriesList from "../components/common/AccessoriesList";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";


export const Devices = () => {

    return (
        <React.Fragment>
            <Section style={{paddingTop: "60px"}}>
                <Container>

                    <Row className="d-flex justify-content-between">

                        <Col md={6}>
                            <SectionTitle className="container-fluid" style={{fontSize: "84px"}}>Playstation 5</SectionTitle>
                            <h1>Bacon ipsum dolor amet pork belly turducken pancetta, picanha cow hamburger beef ribs.
                                Shoulder bresaola buffalo, chicken tongue pork chop fatback cupim. Strip steak pork
                                belly tenderloin tongue picanha meatloaf ball tip short ribs sausage pork frankfurter
                                ribeye corned beef brisket bacon. T-bone short ribs shank tenderloin bresaola.

                                Bacon ipsum dolor amet pork belly turducken pancetta, picanha cow hamburger beef ribs.
                                Shoulder bresaola buffalo, chicken tongue pork chop fatback cupim. Strip steak pork
                                belly tenderloin tongue picanha meatloaf ball tip short ribs sausage pork frankfurter
                                ribeye corned beef brisket bacon. T-bone short ribs shank tenderloin bresaola.
                            </h1>
                        </Col>
                        <Col md={6}>
                            <div style={{
                                backgroundImage: "url('ps5disk.png')",
                                width: "100%",
                                height: "100%",
                                position: "absolute",
                                overflow: "visible",
                                backgroundSize: "cover",
                                backgroundPosition: "top", marginTop: "10vh"}} fluid></div>
                        </Col>
                    </Row>
                </Container>
            </Section>
        </React.Fragment>
    );
};