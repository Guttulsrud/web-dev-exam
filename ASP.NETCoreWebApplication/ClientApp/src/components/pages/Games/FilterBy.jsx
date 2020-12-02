import React, {useState} from 'react';
import {DropDownContainer, DropDownHeader, DropDownListContainer, DropDownList, ListItem} from './style';

const options = ["All", "3D Platformer", "Action RPG", "Adventure", "Racing"];

const FilterBy = ({handleFilter}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = value => () => {
        setSelectedOption(value);
        setIsOpen(false);
        handleFilter(value === "All" ? "" : value);
    };

    return (
        <DropDownContainer>
            <DropDownHeader onClick={toggling} open={isOpen}>
                {selectedOption || "Categories"}
            </DropDownHeader>
            {isOpen && (
                <DropDownListContainer open={isOpen}>
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
    )
}

export default FilterBy;