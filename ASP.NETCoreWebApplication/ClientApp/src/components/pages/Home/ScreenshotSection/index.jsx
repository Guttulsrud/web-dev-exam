import React from 'react';
import Container from "react-bootstrap/Container";
import {SectionTitle} from "../../../base/SectionTitle";
import GameThumbList from "../../../common/GameThumbList/GameThumbList";
import {Section} from "../../../base/Section";

const ScreenShotSection = (props) => {
    return (
        <Section>
            <Container>
                <SectionTitle>{props.title}</SectionTitle>
                <GameThumbList data={props.data}/>
            </Container>
        </Section>
    )

}

export default ScreenShotSection;