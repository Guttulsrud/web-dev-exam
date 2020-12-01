import React from 'react';
import {useParams} from 'react-router-dom';

import FullGame from '../components/pages/Game/HeroSection/FullGame';


export const Game = () => {
    const {id} = useParams()
    return (
        <React.Fragment>
            <FullGame></FullGame>
        </React.Fragment>
    );
};