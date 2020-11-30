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