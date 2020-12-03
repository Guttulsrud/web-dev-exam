import React, {useState} from 'react';
import {FocusLine, InputWrapper, Label, StyledInput} from './style';
import PropTypes from "prop-types"

const Input = ({onChange, value, label, placeholder, type, className, transparent}) => {
    const [isFilled, setFilled] = useState(false);
    const [hasFocus, setFocus] = useState(false);
    const [hadFocus, setHadFocus] = useState(false);

    const handleChange = (e) => {
        e.target.value !== '' ? setFilled(true) : setFilled(false);
    };
    
    return (
        <InputWrapper className={className}>
            <StyledInput filled={isFilled}
                         onFocus={() => {
                             setFocus(true);
                             setHadFocus(true);
                         }}
                         onBlur={() => setFocus(false)} type={type} placeholder={hasFocus ? placeholder : ''}
                         value={value}
                         transparent={transparent}
                         onChange={(e) => {
                             onChange(e);
                             handleChange(e);
                         }}
            />
            <Label transparent={transparent} filled={isFilled} isFocused={hasFocus}>{label}</Label>
            <FocusLine transparent={transparent} isFocused={hasFocus} hadFocus={hadFocus}/>
        </InputWrapper>
    );
};

Input.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string.isRequired,
    className: PropTypes.string,
    transparent: PropTypes.bool
}

export default Input;