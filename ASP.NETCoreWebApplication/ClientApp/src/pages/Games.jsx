import React, {useEffect, useState} from 'react';
import axios from 'axios';

import {Section} from '../components/base/Section';
import {SectionTitle} from '../components/base/SectionTitle';
import Container from "react-bootstrap/Container";
import GameList from "../components/common/GameList/GameList";
import {data} from "../data";
import {SignLogo} from "../components/common/SignLogo";
import {RadialGradient} from "../components/common/RadialGradient";

export const Games = (props) => {

    const [ games, setGames ] = useState( [ {
        id: 1001,
        title: "Demons Souls",
        category: "Action Role Playing",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus posuere risus vel semper. Etiam tempus arcu non velit dignissim semper in ac turpis.",
        backgroundImage: "demons.jpg",
        gameLogo: "demonslogo.jpg",
        likes: 0,
        darkTheme: false,
        screenshots: [
            "1.jpg",
            "2.jpg",
            "3.jpg"
        ],
    } ] );

    useEffect( () => {

        const url = "https://localhost:5001/games";
        axios.get( url  )
            .then( response => {
                setGames( response.data );
            })

    }, [] )

    return (
        <React.Fragment>
            <Section style={{paddingTop: "60px"}}>
                <Container>
                    <SectionTitle>Games</SectionTitle>
                    <GameList data={games}></GameList>
                </Container>
            </Section>

        </React.Fragment>
    );
};