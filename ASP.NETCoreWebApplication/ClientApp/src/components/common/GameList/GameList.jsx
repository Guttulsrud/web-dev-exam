import React, {useContext} from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import GameCard from "../GameCard/GameCard";
import {EntityContext} from '../../../context/EntityContext';
import SortBy from "../../pages/Games/SortBy";
import FilterBy from "../../pages/Games/FilterBy";


const GameList = (props) => {
    const {entities, test} = useContext(EntityContext)
    
    const generateGames = () => {
        return entities[0].map((game, i) => {
            return <GameCard key={i} {...game}/>
        });
    }

    return (
        <div>
            <div style={{position:"relative",zIndex:"100000000000000000000000000"}}>
                <SortBy games={entities[0]}/>
                <FilterBy games={entities[0]}/>
            </div>
         
            <Row>
                {generateGames()}
            </Row>
        </div>
    )
}

export default GameList;