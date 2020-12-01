import React, {useEffect, useState} from 'react';
import {Section} from '../components/base/Section';
import {SectionTitle} from '../components/base/SectionTitle';
import Container from 'react-bootstrap/Container';
import GameList from '../components/common/GameList/GameList';
import {EntityProvider} from '../context/EntityContext';

export const Games = (props) => {

    const [games, setGames] = useState([{
        id: 1001,
        title: 'Demons Souls',
        category: 'Action Role Playing',
        subtitle: 'Lorem',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus posuere risus vel semper. Etiam tempus arcu non velit dignissim semper in ac turpis.',
        description2: 'lorem ipsum dolor',
        featureImage: 'demons.jpg',
        featureVideo: '',
        gameBoxImage: '',
        trailerLink: '',
        price: 69,
        backgroundImage: 'demons.jpg',
        gameLogo: 'demonslogo.jpg',
        favorites: 0,
        developer: 'something',
        publisher: 'something',
        year: 2020,
        screenshots: [
            '1.jpg',
            '2.jpg',
            '3.jpg'
        ],
        isDark: false,
        isFeatured: true,

    }]);
    
    return (
        <EntityProvider endpoint={"game"}>
            <Section style={{paddingTop: '60px'}}>
                <Container>
                    <div className={'d-flex justify-content-between align-content-center align-items-center'}>
                        <SectionTitle>Games</SectionTitle>
                    </div>
                        <GameList />
                </Container>
            </Section>

        </EntityProvider>
    );
};