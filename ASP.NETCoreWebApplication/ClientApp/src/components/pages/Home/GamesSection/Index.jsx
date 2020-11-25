import React from 'react';
import {Section} from "../../../base/Section";
import Container from "react-bootstrap/Container";
import {SectionTitle} from "../../../base/SectionTitle";
import {Button} from "../../../base/Button";
import GameList from "../../../common/GameList/GameList";

const GamesSection = (props) => {
    return (
        <Section>
            <Container>

                    <SectionTitle>{props.title}</SectionTitle>
                    <GameList data={props.data}/>
                    <div className={"d-flex justify-content-center"}>
                        <Button outline>View more</Button>
                    </div>
            </Container>
        </Section>
    )
}

export default GamesSection;
