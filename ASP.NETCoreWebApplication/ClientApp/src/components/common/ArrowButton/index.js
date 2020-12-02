import React from 'react';
import {RoundBtn} from './style';
import ArrowIcon from "./ArrowIcon";

const ArrowButton = (props) => {
    return (
        <RoundBtn outline={props.outline} disabled={props.disabled}>
            <ArrowIcon rotate={props.rotate} outline={props.outline} disabled={props.disabled}/>
        </RoundBtn>
    )
}

export default ArrowButton;