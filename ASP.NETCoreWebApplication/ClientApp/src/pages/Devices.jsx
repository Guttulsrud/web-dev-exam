import React, {useEffect, useState} from 'react';

import ScreenShotSection from "../components/pages/Home/ScreenshotSection";
import {Section} from "../components/base/Section";
import Container from "react-bootstrap/Container";
import {SectionTitle} from "../components/base/SectionTitle";
import AccessoriesList from "../components/common/AccessoriesList";


export const Devices = () => {

    const data = [
        {
            id: 2001,
            title: "Playstation 5",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus posuere risus vel semper. Etiam tempus arcu non velit dignissim semper in ac turpis.",
            backgroundImage: "ps5disk.png",
           // gameLogo: "demonslogo.png",
            darkTheme: false,
        },
        {
            id: 2002,
            title: "Playstation 5",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus posuere risus vel semper. Etiam tempus arcu non velit dignissim semper in ac turpis.",
            backgroundImage: "ps5disk.png",
            // gameLogo: "demonslogo.png",
            darkTheme: false,
        }]

    return (
        <React.Fragment>
            <Section style={{paddingTop: "60px"}}>
                <Container>
                    <SectionTitle>Devices</SectionTitle>
                </Container>
            </Section>
        </React.Fragment>
    );
};