import React, {useEffect, useState} from 'react';
import {Section} from '../../../base/Section';
import Container from 'react-bootstrap/Container';
import {SectionTitle} from '../../../base/SectionTitle';
import {Button} from '../../../base/Button';
import GameList from '../../../common/GameList/GameList';
import {useHistory} from 'react-router-dom';

const GamesSection = (props) => {
    const [offset, setOffset] = useState(0);

    const history = useHistory()
    const handleRedirect = () => {
        history.push("/games")
    }


    useEffect(() => {
        function handleScroll() {
            setOffset(window.pageYOffset);
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <Section>
            <Container>
                <SectionTitle>{props.title}</SectionTitle>
                <GameList/>
                <div className={'d-flex justify-content-center'}>
                    <Button outline onClick={handleRedirect}>View more</Button>
                </div>
            </Container>
        </Section>
    );
};

export default GamesSection;
