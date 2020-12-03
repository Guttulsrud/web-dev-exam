import React, {useContext} from 'react';
import GameList from '../../../common/GameList/GameList';
import {EntityProvider} from '../../../../context/EntityContext';
import Container from 'react-bootstrap/Container';
import {Section} from '../../../base/Section';
import {SectionTitle} from '../../../base/SectionTitle';
import {SingleGameContext} from '../../../../context/SingleGameContext';

const RelatedSection = () => {
    const {game} = useContext(SingleGameContext);
    const [gameState] = game;
    return (

        <Section>
            <Container>
                <SectionTitle>Related Games</SectionTitle>
                <EntityProvider endpoint={'game'}>
                    <GameList currentTitle={gameState.title} currentCategory={gameState.category}/>
                </EntityProvider>
            </Container>
        </Section>
    );
};

export default RelatedSection;