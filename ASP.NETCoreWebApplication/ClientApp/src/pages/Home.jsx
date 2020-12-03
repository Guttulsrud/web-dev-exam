import React from 'react';

import FeaturedSection from '../components/pages/Home/FeaturedSection/Index';
import GamesSection from "../components/pages/Home/GamesSection/Index";
import InfoSection from "../components/pages/Home/InfoSection";
import {EntityProvider} from '../context/EntityContext';


export const Home = () => {

    return (
        <EntityProvider endpoint={"game"}>
            <div style={{marginTop: "130px"}}>
                <FeaturedSection/>
            </div>

            <GamesSection title={"Most awaited games"}/>
            <InfoSection/>
        </EntityProvider>
    );
};
