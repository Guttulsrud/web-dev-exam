import React, {useEffect, useState} from 'react';

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
        subtitle: "Lorem",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus posuere risus vel semper. Etiam tempus arcu non velit dignissim semper in ac turpis.",
        description2: "lorem ipsum dolor",
        featureImage: "demons.jpg",
        featureVideo: "",
        gameBoxImage: "",
        trailerLink: "",
        price: 69,
        backgroundImage: "demons.jpg",
        gameLogo: "demonslogo.jpg",
        favorites: 0,
        developer: "something",
        publisher: "something",
        year: 2020,
        screenshots: [
            "1.jpg",
            "2.jpg",
            "3.jpg"
        ],
        isDark: false,
        isFeatured: true,

    } ] );
    const axios = require('axios')
    useEffect( () => {
        const url = "https://localhost:5001/games";

        axios.get( url  )
            .then( response => {
                setGames( response.data );
            })

    }, [] );

    return (
        <React.Fragment>
            <Section style={{paddingTop: "60px"}}>
                <Container>
                    <SectionTitle>Games</SectionTitle>
                    <GameList data={games}/>
                </Container>
            </Section>

        </React.Fragment>
    );
};