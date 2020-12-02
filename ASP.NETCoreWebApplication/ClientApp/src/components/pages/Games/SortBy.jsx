import React, {useContext, useEffect, useState} from 'react';
import {DropDownContainer, DropDownHeader, DropDownListContainer, DropDownList, ListItem} from './style';
import {EntityContext} from '../../../context/EntityContext';

const options = ['Release ascending', 'Release descending', 'Price ascending', 'Price descending'];

const SortBy = () => {
    const {entities} = useContext(EntityContext);

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [yearAsc, setYearAsc] = useState(false);
    const [games, setGames] = entities;

    const toggling = () => setIsOpen(!isOpen);

    const sortByYear = (value) => {
        if (value.includes('Release')) {
            return value.includes('ascending') ? [...games].sort((a, b) => parseInt(a.year) > parseInt(b.year) ? 1 : -1) :
                [...games].sort((a, b) => parseInt(a.year) < parseInt(b.year) ? 1 : -1);
        } else {
            return value.includes('ascending') ? [...games].sort((a, b) => parseInt(a.price) > parseInt(b.price) ? 1 : -1) :
                [...games].sort((a, b) => parseInt(a.price) < parseInt(b.price) ? 1 : -1);
        }
    };

    const onOptionClicked = value => () => {
        setSelectedOption(value);
        setIsOpen(false);
        setYearAsc(!yearAsc);
        setGames(sortByYear(value));

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