import React from 'react';
import {Section} from '../../../base/Section';
import Container from 'react-bootstrap/Container';
import {SectionTitle} from '../../../base/SectionTitle';
import {Button} from '../../../base/Button';
import GameList from '../../../common/GameList/GameList';
import {useHistory} from 'react-router-dom';
import PropTypes from "prop-types"

const GamesSection = (props) => {
    const history = useHistory()
    const handleRedirect = () => {
        history.push("/games")
    }

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

GamesSection.propTypes = {
    title: PropTypes.string.isRequired
}

export default GamesSection;
