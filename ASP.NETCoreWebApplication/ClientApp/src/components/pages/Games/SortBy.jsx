import React, {useState} from 'react';
import {Main, DropDownContainer, DropDownHeader, DropDownListContainer, DropDownList, ListItem} from './style';

const options = ["Popular", "Release date", "Something"];

const SortBy = (props) => {

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
                    {selectedOption || "Sort by"}
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
    )
}

export default SortBy;