import React, {useContext, useState} from 'react';
import Row from 'react-bootstrap/Row';
import GameCard from '../GameCard/GameCard';
import {EntityContext} from '../../../context/EntityContext';
import SortBy from '../../pages/Games/SortBy';
import FilterBy from '../../pages/Games/FilterBy';

const GameList = ({explore, query}) => {
    const {entities} = useContext(EntityContext);
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

    return (
        <div>
            {explore &&
            <Row className={'pb-5'}>
                <SortBy games={games}/>
                <FilterBy games={games} handleFilter={setValue}/>
            </Row>
            }
            <Row>
                {!query ? generateGames() : generateSearchedGames()}
            </Row>
        </div>
    );
};

export default GameList;