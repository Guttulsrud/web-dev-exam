import React, {useContext} from 'react';
import {useParams} from 'react-router-dom';

import FullGame from '../components/pages/Game/HeroSection/FullGame';
import RelatedSection from "../components/pages/Game/RelatedSection";
import InfoSection from "../components/pages/Game/InfoSection";
import CharacterSection from "../components/pages/Game/CharacterSection";
import ScreenshotSection from "../components/pages/Game/ScreenshotSection";
import TrailerSection from "../components/pages/Game/TrailerSection";
import DeveloperSection from "../components/pages/Game/DeveloperSection";

import {SingleGameProvider} from "../context/SingleGameContext";
import {EntityProvider} from '../context/EntityContext';

export const Game = () => {
    const {id} = useParams()

    return (
        <EntityProvider endpoint={"character"}>
            <SingleGameProvider endpoint={id}>
            <FullGame/>
            <InfoSection/>
            <TrailerSection/>
            <CharacterSection/>
            <ScreenshotSection/>
            <DeveloperSection/>
            <RelatedSection/>
            </SingleGameProvider>
        </EntityProvider>
    );
};