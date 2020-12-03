import React from 'react';
import Container from "react-bootstrap/Container";
import {SectionTitle} from "../../../base/SectionTitle";
import GameThumbList from "../../../common/GameThumbList/GameThumbList";
import {Section} from "../../../base/Section";
import PropTypes from "prop-types"

const ScreenShotSection = (props) => {
    return (
        <Section>
            <Container>
                <SectionTitle>{props.title}</SectionTitle>
                <GameThumbList />
            </Container>
        </Section>
    )
}

ScreenShotSection.propTypes = {
    title: PropTypes.string.isRequired
}

export default ScreenShotSection;