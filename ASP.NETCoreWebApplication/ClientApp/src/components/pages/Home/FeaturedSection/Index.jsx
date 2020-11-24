import React from 'react';

import {Section} from '../../../base/Section';
import Container from "react-bootstrap/Container";
import GameList from "../../../common/GameList/GameList";

const HeaderSection = (props) => {

    return (
            <Section>
                <Container>
                    <GameList data={props.data}/>
                </Container>
            </Section>
    )
}

export default HeaderSection;