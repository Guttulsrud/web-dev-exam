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
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(!show);
    const handleClose = () => setShow(false);

    const [isOpen, setIsOpen] = useState(false);
    const [sortByOpen, setSortByOpen] = useState(false);
    const [filterOpen, setFilterOpen] = useState(false);

    const toggling = (value) => {
        if(value === "sortBy"){
            setSortByOpen(!sortByOpen)
            setFilterOpen(false)
        }else {
            setFilterOpen(!filterOpen)
            setSortByOpen(false)
        }
    }



/*    const toggling = () => setIsOpen(!isOpen);*/

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
                <SortBy games={games} toggling={toggling} isOpen={sortByOpen}/>
                <FilterBy games={games} toggling={toggling} isOpen={filterOpen} handleFilter={setValue}/>
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