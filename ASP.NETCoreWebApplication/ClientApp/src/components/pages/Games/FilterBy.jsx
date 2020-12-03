import React, {useState} from 'react';
import {DropDownContainer, DropDownHeader, DropDownListContainer, DropDownList, ListItem} from './style';
import PropTypes from 'prop-types';

const options = ['All', '3D Platformer', 'Action RPG', 'Adventure', 'Racing'];

const FilterBy = ({isOpen, toggling, handleFilter}) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const onOptionClicked = value => () => {
        setSelectedOption(value);
        toggling('filterBy');
        handleFilter(value === 'All' ? '' : value);
    };

    return (
        <DropDownContainer>
            <DropDownHeader onClick={() => toggling('filterBy')} open={isOpen}>
                {selectedOption || 'Categories'}
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
    );
};

FilterBy.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggling: PropTypes.func.isRequired,
    handleFilter: PropTypes.func.isRequired
};

export default FilterBy;