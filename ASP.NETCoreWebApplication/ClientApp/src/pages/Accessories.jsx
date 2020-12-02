import React, {useEffect, useState} from 'react';

import {Section} from '../components/base/Section';
import {SectionTitle} from '../components/base/SectionTitle';
import Container from "react-bootstrap/Container";
import AccessoriesList from "../components/common/AccessoriesList";
import {EntityProvider} from "../context/EntityContext";

export const Accessories = (props) => {

    const data = [
        {
            title: "DualSense Wireless Controller",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus posuere risus vel semper. Etiam tempus arcu non velit dignissim semper in ac turpis.",
            image: "dualsense.png",
            price: 599
        },
        {
            title: "PULSE 3D wireless headset",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus posuere risus vel semper. Etiam tempus arcu non velit dignissim semper in ac turpis.",
            image: "pulse3d.png",
            price: 599
        },
        {
            title: "Media Remote",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus posuere risus vel semper. Etiam tempus arcu non velit dignissim semper in ac turpis.",
            image: "mediaremote.png",
            price: 599
        },
        {
            title: "HD Camera",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus posuere risus vel semper. Etiam tempus arcu non velit dignissim semper in ac turpis.",
            image: "camera.png",
            price: 599
        },
        {
            title: "DualSense Charging Station",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus posuere risus vel semper. Etiam tempus arcu non velit dignissim semper in ac turpis.",
            image: "dualsense-charger.png",
            price: 599
        },
        ]



    return (
        <React.Fragment>
            <Section style={{paddingTop: "60px"}}>
                <EntityProvider endpoint={"accessory"}>
                    <Container>
                        <SectionTitle>Accessories</SectionTitle>
                        <AccessoriesList/>
                    </Container>
                </EntityProvider>


            </Section>
        </React.Fragment>
    );
};