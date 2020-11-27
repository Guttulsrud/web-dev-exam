import React, {useEffect, useState} from 'react';

import {Section} from '../components/base/Section';
import {SectionTitle} from '../components/base/SectionTitle';
import Container from "react-bootstrap/Container";
import GameList from "../components/common/GameList/GameList";
import {data} from "../data";
import {SignLogo} from "../components/common/SignLogo";
import {RadialGradient} from "../components/common/RadialGradient";

export const Games = (props) => {



    return (
        <React.Fragment>
            <Section style={{paddingTop: "60px"}}>
                <Container>
                    <SectionTitle>Games</SectionTitle>
                    <GameList data={data}></GameList>
                </Container>
            </Section>

        </React.Fragment>
    );
};
