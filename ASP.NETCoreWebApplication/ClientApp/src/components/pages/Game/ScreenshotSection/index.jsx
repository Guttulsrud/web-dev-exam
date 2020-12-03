import React from 'react';
import {Section} from "../../../base/Section";
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Paragraph} from "../../../base/Paragraph";
import {Subtitle} from "../../../base/Subtitle";
import GameThumbList from "../../../common/GameThumbList/GameThumbList";


const ScreenshotSection = (props) => {
    return (
        <Section blue paddingTop={30} style={{position: "relative", zIndex: "10000"}}>
            <Container>
                <Subtitle white right>Screenshots</Subtitle>

                <GameThumbList data={props.data}></GameThumbList>

            </Container>
        </Section>
    )
}

export default ScreenshotSection;