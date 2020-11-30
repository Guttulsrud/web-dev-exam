import React, {useState} from 'react';
import {Main, DropDownContainer, DropDownHeader, DropDownListContainer, DropDownList, ListItem} from './style';

const options = ["Category 1", "Category 2", "Category 3"];

const FilterBy = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = value => () => {
        setSelectedOption(value);
        setIsOpen(false);
        console.log(selectedOption);
    };

    return (
        <DropDownContainer>
            <DropDownHeader onClick={toggling} arrow={isOpen ? "selectarrowup.svg" : "selectarrowdown.svg"}>
                {selectedOption || "Popular"}
            </DropDownHeader>
            {isOpen && (
                <DropDownListContainer>
                    <DropDownList>
                        {options.map(option => (
                            <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                                {option}
                            </ListItem>
                        ))}
                    </DropDownList>
                </DropDownListContainer>
            )}
        </DropDownContainer>
    )
}

export default FilterBy;