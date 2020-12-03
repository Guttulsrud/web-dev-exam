import React, {useContext, useState} from 'react';
import Row from 'react-bootstrap/Row';
import GameCard from '../GameCard/GameCard';
import {EntityContext} from '../../../context/EntityContext';
import SortBy from '../../pages/Games/SortBy';
import FilterBy from '../../pages/Games/FilterBy';
import PsLoading from '../../Loading';
import PropTypes from "prop-types"

const GameList = ({explore, query, currentTitle, currentCategory}) => {
    const {entities, loading} = useContext(EntityContext);
    const [games] = entities;
    const [filterValue, setValue] = useState('');

    const generateGames = () => {
        return games.filter(game => game.category.includes(filterValue)).map((game, i) => {
            return <GameCard key={i} {...game}/>;
        });
    };

    const generateSearchedGames = () => {
        return games.filter(game => game.title.toLowerCase().includes(query.toLowerCase()) && game.category.includes(filterValue)).map((game, i) => {
            return <GameCard key={i} {...game}/>;
        });
    }

    const generateRelatedGames = () => {
        return games.filter(game => game.title !== currentTitle && game.category === currentCategory).map((game, i) => (
            <GameCard key={`gamecard${i}`} {...game}/>
        ))
    }

    if(loading) return <PsLoading/>

    return (
        <div>
            {explore &&
            <Row className={'pb-5'}>
                <SortBy games={games}/>
                <FilterBy games={games} handleFilter={setValue}/>
            </Row>
            }
            <Row>
                {(!query && !currentCategory && !currentTitle) && generateGames()}
                {query && generateSearchedGames()}
                {currentTitle && currentCategory && generateRelatedGames()}
            </Row>
        </div>
    );
};

GameList.propTypes = {
    explore: PropTypes.bool,
    query: PropTypes.string,
    currentTitle: PropTypes.string,
    currentCategory: PropTypes.string
}

export default GameList;