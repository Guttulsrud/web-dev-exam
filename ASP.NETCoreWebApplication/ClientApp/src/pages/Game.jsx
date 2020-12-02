import React from 'react';
import {useParams} from 'react-router-dom';

import FullGame from '../components/pages/Game/HeroSection/FullGame';
import RelatedSection from "../components/pages/Game/RelatedSection";
import InfoSection from "../components/pages/Game/InfoSection";
import CharacterSection from "../components/pages/Game/CharacterSection";
import ScreenshotSection from "../components/pages/Game/ScreenshotSection";
import TrailerSection from "../components/pages/Game/TrailerSection";
import DeveloperSection from "../components/pages/Game/DeveloperSection";
import {PsFigures} from "../components/common/AccessoriesCard/PsFigures";


export const Game = () => {

    const data = [
        {
            id: 1001,
            title: "Demons Souls",
            category: "Action Role Playing",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus posuere risus vel semper. Etiam tempus arcu non velit dignissim semper in ac turpis.",
            backgroundImage: "demons.jpg",
            gameLogo: "demonslogo.png",
            likes: 0,
            darkTheme: false,
            screenshots: [
                "1.jpg",
                "2.jpg",
                "3.jpg"
            ],
        },
        {
            id: 1002,
            title: "Horizon Forbidden West",
            category: "Action Role Playing",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus posuere risus vel semper. Etiam tempus arcu non velit dignissim semper in ac turpis.",
            backgroundImage: "forbidden-west.jpg",
            gameLogo: "",
            likes: 2,
            darkTheme: false,
            screenshots: [
                "1.jpg",
                "2.jpg",
                "3.jpg"
            ],
        },
        {
            id: 1003,
            title: "Ratchet & Clank a Crack In Time",
            category: "Adventure platformer",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus posuere risus vel semper. Etiam tempus arcu non velit dignissim semper in ac turpis.",
            backgroundImage: "ratchet.jpg",
            gameLogo: "",
            likes: 0,
            darkTheme: false,
            screenshots: [
                "1.jpg",
                "2.jpg",
                "3.jpg"
            ],
        },
        {
            id: 1004,
            title: "Spiderman Miles Morales",
            category: "Action Adventure",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus posuere risus vel semper. Etiam tempus arcu non velit dignissim semper in ac turpis.",
            backgroundImage: "miles-morales.jpg",
            gameLogo: "",
            likes: 0,
            darkTheme: false,
            screenshots: [
                "1.jpg",
                "2.jpg",
                "3.jpg"
            ],
        },
    ]

    const {id} = useParams()
    return (
        <React.Fragment>
            <FullGame></FullGame>
            <InfoSection></InfoSection>
            <TrailerSection></TrailerSection>
            <CharacterSection></CharacterSection>
            <ScreenshotSection data={data}></ScreenshotSection>
            <DeveloperSection></DeveloperSection>
            <RelatedSection></RelatedSection>
            <PsFigures black></PsFigures>
        </React.Fragment>
    );
};