import React, {useContext, useState} from 'react';
import {DropDownContainer, DropDownHeader, DropDownListContainer, DropDownList, ListItem} from './style';
import {EntityContext} from '../../../context/EntityContext';
import PropTypes from "prop-types"

const options = ['Release ascending', 'Release descending', 'Price ascending', 'Price descending'];

const SortBy = (props) => {
    const {entities} = useContext(EntityContext);
    const [selectedOption, setSelectedOption] = useState(null);
    const [yearAsc, setYearAsc] = useState(false);
    const [games, setGames] = entities;

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
        props.toggling("sortBy");
        setYearAsc(!yearAsc);
        setGames(sortByYear(value));

    };

    return (
        <DropDownContainer>
            <DropDownHeader onClick={() => props.toggling("sortBy")} open={props.isOpen}>
                {selectedOption || 'Sort by'}
            </DropDownHeader>
            {props.isOpen && (
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

SortBy.propTypes = {
    toggling: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired
}

export default SortBy;