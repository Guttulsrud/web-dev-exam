import React from 'react';
import {useParams} from 'react-router-dom';

import FullGame from '../components/pages/Game/HeroSection/FullGame';
import RelatedSection from "../components/pages/Game/RelatedSection";
import InfoSection from "../components/pages/Game/InfoSection";
import CharacterSection from "../components/pages/Game/CharacterSection";
import ScreenshotSection from "../components/pages/Game/ScreenshotSection";
import TrailerSection from "../components/pages/Game/TrailerSection";
import DeveloperSection from "../components/pages/Game/DeveloperSection";


export const Game = () => {
    const {id} = useParams()
    return (
        <React.Fragment>
            <FullGame></FullGame>
            <InfoSection></InfoSection>
            <TrailerSection></TrailerSection>
            <CharacterSection></CharacterSection>
            <ScreenshotSection></ScreenshotSection>
            <DeveloperSection></DeveloperSection>
            <RelatedSection></RelatedSection>
        </React.Fragment>
    );
};