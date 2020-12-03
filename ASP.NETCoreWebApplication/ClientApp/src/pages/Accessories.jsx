import React from 'react';
import {Section} from '../components/base/Section';
import {SectionTitle} from '../components/base/SectionTitle';
import Container from "react-bootstrap/Container";
import AccessoriesList from "../components/common/AccessoriesList";
import {EntityProvider} from "../context/EntityContext";

export const Accessories = () => {

    return (
            <Section style={{paddingTop: "60px"}}>
                <EntityProvider endpoint={"accessory"}>
                    <Container>
                        <SectionTitle>Accessories</SectionTitle>
                        <AccessoriesList/>
                    </Container>
                </EntityProvider>
            </Section>
    );
};