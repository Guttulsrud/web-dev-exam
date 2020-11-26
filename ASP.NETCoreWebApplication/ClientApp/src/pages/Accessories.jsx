import React, {useEffect, useState} from 'react';

import {Section} from '../components/base/Section';
import {SectionTitle} from '../components/base/SectionTitle';
import Container from "react-bootstrap/Container";
import GameList from "../components/common/GameList/GameList";
import {data} from "../data";
import {SignLogo} from "../components/common/SignLogo";
import {RadialGradient} from "../components/common/RadialGradient";

export const Accessories = (props) => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        function handleScroll() {
            setOffset(window.pageYOffset)
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, []);
    return (
        <React.Fragment>
            <Section style={{paddingTop: "60px"}}>
                <Container>
                    <SectionTitle>Accessories</SectionTitle>
                    <GameList data={data}></GameList>
                </Container>
                <RadialGradient/>
                <SignLogo style={{transform: `rotate(20deg) translateY(${offset * 0.4}px)`}}/>
            </Section>

        </React.Fragment>
    );
};