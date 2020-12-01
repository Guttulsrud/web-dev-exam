import React, {useContext, useEffect, useState} from 'react';
import {DropDownContainer, DropDownHeader, DropDownListContainer, DropDownList, ListItem} from './style';
import {EntityContext} from '../../../context/EntityContext';

const options = ['Release date', 'Category 1', 'Category 2', 'Category 3'];

const SortBy = (props) => {
    const {entities, setData} = useContext(EntityContext);


    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [yearAsc, setYearAsc] = useState(false);
    const [games, setGames] = entities;

    const toggling = () => setIsOpen(!isOpen);

    const sortByYear = (asc) => {
        if (asc) {
            return games.sort((a, b) => parseInt(a.year) > parseInt(b.year) ? 1 : -1);
        } else {
            return games.sort((a, b) => parseInt(a.year) < parseInt(b.year) ? 1 : -1);
        }
    };

    const sortByCategory = (cat) => {
        return games.sort((a, b) => a.category > b.category ? 1 : -1);
    };

    const onOptionClicked = value => () => {
        setSelectedOption(value);
        setIsOpen(false);

        if (value === 'Release date') {

            setYearAsc(!yearAsc);
            setGames(sortByYear(yearAsc));
        }

        if (value === 'Category 1') {
            setGames([])

            setGames(sortByCategory(1));
        }
        console.log(value.split(' '));

    };

    return (
        <DropDownContainer>
            <DropDownHeader onClick={toggling} open={isOpen}>
                {selectedOption || 'Sort by'}
            </DropDownHeader>
            {isOpen && (
                <DropDownListContainer>
                    <DropDownList>
                        {options.map((item, i) => (
                            <ListItem onClick={onOptionClicked(item)} key={i}>
                                {item}
                            </ListItem>
                        ))}
                    </DropDownList>
                </DropDownListContainer>
            )}
        </DropDownContainer>
    );
};

export default SortBy;