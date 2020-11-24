import React from 'react';
import {Section} from "../../../base/Section";
import Container from "react-bootstrap/Container";
import {SectionTitle} from "../../../base/SectionTitle";
import GameList from "../../../common/GameList/GameList";

const GamesSection = (props) => {
    return (
        <Section>
            <Container>

                    <SectionTitle>{props.title}</SectionTitle>
                    <GameList data={props.data}/>
            </Container>
        </Section>
    )
}

export default GamesSection;
