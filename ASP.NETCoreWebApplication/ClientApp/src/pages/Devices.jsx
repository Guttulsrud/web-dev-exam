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


export const Devices = () => {

    return (
        <React.Fragment>
            <Section style={{paddingTop: "60px"}}>
                <Container>

                    <Row className="d-flex justify-content-between">
                        <SectionTitle className="container-fluid">Playstation
                            5</SectionTitle>
                        <Col md={6}>

                            <SectionText className="ml-3">Bacon ipsum dolor amet spare ribs bresaola strip steak
                                kielbasa beef ham beef ribs porchetta capicola andouille tongue sausage rump leberkas
                                frankfurter. T-bone ham frankfurter landjaeger kielbasa leberkas rump tongue salami
                                short loin shankle pastrami. Tongue prosciutto shankle, spare ribs picanha bresaola
                                swine. Kevin kielbasa meatloaf turducken pastrami meatball ribeye, chuck biltong tongue
                                turkey short loin jerky venison. Landjaeger kielbasa chicken, bacon turkey boudin
                                shankle jerky tri-tip cow. Capicola leberkas sirloin, pork loin rump hamburger pork chop
                                swine spare ribs biltong short ribs frankfurter strip steak pastrami salami. Bacon
                                salami cupim, picanha ribeye leberkas pork chop ball tip pork loin sirloin capicola
                                meatloaf brisket jowl tongue.

                                Capicola cupim short loin turducken turkey biltong beef ribs sirloin meatball jowl strip
                                steak prosciutto sausage. Shank chislic brisket pastrami short loin, kielbasa picanha
                                landjaeger ground round pork loin kevin. Bacon biltong pork shank salami jerky. Strip
                                steak pork belly sausage ham spare ribs doner meatball pig.

                                Rump chicken tongue burgdoggen filet mignon pork loin. Salami short loin jerky filet
                                mignon corned beef. Venison jerky biltong shoulder, sirloin corned beef andouille.
                                Pancetta meatball meatloaf andouille buffalo chicken picanha hamburger, boudin jerky
                                pork belly kielbasa corned beef pork brisket. Strip steak biltong sausage corned beef
                                cow tri-tip tail pork loin filet mignon ham chicken bacon.

                                Chuck ball tip doner short loin fatback bacon tenderloin meatball spare ribs prosciutto
                                burgdoggen. Beef ribs meatloaf hamburger pancetta buffalo. Landjaeger jerky rump
                                andouille chicken. Cow hamburger kevin swine, andouille rump filet mignon short ribs
                                shankle. Bresaola drumstick ball tip ribeye boudin venison buffalo landjaeger chicken
                                jowl salami sausage. Pig short ribs chicken, ham beef chislic pastrami sirloin. Bresaola
                                short ribs corned beef beef bacon sirloin ham hock, shankle flank salami.

                                Salami shankle short loin t-bone jerky pork belly jowl. Beef kielbasa capicola sirloin
                                t-bone shoulder swine. Landjaeger cow strip steak sirloin jowl shank. Kevin t-bone
                                sausage short loin doner prosciutto ground round andouille, bacon chuck shank ham beef
                                capicola turducken. Chislic meatloaf hamburger kielbasa, flank ball tip pork alcatra
                                boudin. Kielbasa tenderloin ham, short ribs venison pork chop beef.
                            </SectionText>
                        </Col>
                        <Col md={6}>
                            <div style={{
                                backgroundImage: "url('ps5disk.png')",
                                width: "100%",
                                height: "100%",
                                position: "absolute",
                                backgroundPosition: "top",
                                marginTop: "-18vh",
                                marginLeft: "5vh",
                                backgroundRepeat: "no-repeat"
                            }} fluid></div>
                        </Col>
                    </Row>
                </Container>
            </Section>
        </React.Fragment>
    );
};