import React from 'react';
import {Section} from "../../../base/Section";
import {Container} from "react-bootstrap";
import {Subtitle} from "../../../base/Subtitle";
import GameThumbList from "../../../common/GameThumbList/GameThumbList";


const ScreenshotSection = () => {
    return (
        <Section blue paddingTop={30} style={{position: "relative", zIndex: "10000"}}>
            <Container>
                <Subtitle white right>Screenshots</Subtitle>
                <GameThumbList/>
            </Container>
        </Section>
    )
}

export default ScreenshotSection;