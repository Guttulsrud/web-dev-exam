import React, {useEffect, useState} from 'react';

import {Section} from '../components/base/Section';
import {SectionTitle} from '../components/base/SectionTitle';
import Container from "react-bootstrap/Container";
import AccessoriesList from "../components/common/AccessoriesList";

export const Accessories = (props) => {

    const data = [
        {
            title: "DualSense Wireless Controller",
            description: "Lorem ipsum dolor sit amet",
            image: "dualsense.png",
            price: 599
        },
        {
            title: "PULSE 3D wireless headset",
            description: "Lorem ipsum dolor sit amet",
            image: "pulse3d.png",
            price: 599
        },
        {
            title: "Media Remote",
            description: "Lorem ipsum dolor sit amet",
            image: "mediaremote.png",
            price: 599
        },
        {
            title: "HD Camera",
            description: "Lorem ipsum dolor sit amet",
            image: "camera.png",
            price: 599
        },
        {
            title: "DualSense Charging Station",
            description: "Lorem ipsum dolor sit amet",
            image: "dualsense-charger.png",
            price: 599
        },
        ]

    return (
        <React.Fragment>
            <Section style={{paddingTop: "60px"}}>
                <Container>
                    <SectionTitle>Accessories</SectionTitle>
                    <AccessoriesList data={data}/>
                </Container>
            </Section>

        </React.Fragment>
    );
};