import React from 'react';
import {Section} from '../components/base/Section';
import {SectionTitle} from '../components/base/SectionTitle';
import Container from 'react-bootstrap/Container';
import GameList from '../components/common/GameList/GameList';
import {EntityProvider} from '../context/EntityContext';

export const Games = () => {

    return (
        <EntityProvider endpoint={"game"}>
            <Section style={{paddingTop: '60px'}}>
                <Container>
                    <div className={'d-flex justify-content-between align-content-center align-items-center'}>
                        <SectionTitle>Games</SectionTitle>
                    </div>
                    <GameList explore/>
                </Container>
            </Section>

        </EntityProvider>
    );
};