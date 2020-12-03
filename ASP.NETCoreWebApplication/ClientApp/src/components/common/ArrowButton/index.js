import React from 'react';
import {RoundBtn} from './style';
import ArrowIcon from "./ArrowIcon";
import PropTypes from "prop-types"

const ArrowButton = (props) => {
    return (
        <RoundBtn outline={props.outline} disabled={props.disabled}>
            <ArrowIcon rotate={props.rotate} outline={props.outline} disabled={props.disabled}/>
        </RoundBtn>
    )
}

ArrowButton.propTypes = {
    outline: PropTypes.bool,
    disabled: PropTypes.bool,
    rotate: PropTypes.string.isRequired
}

export default ArrowButton;