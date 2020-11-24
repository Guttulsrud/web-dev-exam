import React from 'react';
import {Section} from "../../../base/Section";
import {SectionTitle} from "../../../base/SectionTitle";
import {SignLogo} from "../../../common/SignLogo";
import Container from "react-bootstrap/Container";


const InfoSection = (props) => {
    return (
        <Section blue height={"500"}>
            <SignLogo right/>
            <Container>

                    <SectionTitle white right>Test</SectionTitle>

            </Container>
        </Section>
    )
}

export default InfoSection;