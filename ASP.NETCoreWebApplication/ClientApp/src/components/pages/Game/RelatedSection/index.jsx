import React from 'react';
import GameList from "../../../common/GameList/GameList";
import {EntityProvider} from "../../../../context/EntityContext";
import Container from 'react-bootstrap/Container';
import {SectionWrapper} from "../HeroSection/style";
import {Section} from "../../../base/Section";
import {SectionTitle} from "../../../base/SectionTitle";

const RelatedSection = () => {
    return (
        <React.Fragment>
            <Section>

                <Container>
                    <SectionTitle>Related Games</SectionTitle>
                    <EntityProvider endpoint={'game'}>
                        <GameList/>
                    </EntityProvider>
                </Container>

            </Section>


        </React.Fragment>
    )
}

export default RelatedSection;