import React from 'react';

import {RoundBtn} from './style';
import ArrowIcon from "./ArrowIcon";

const ArrowButton = (props) => {
    return (
            <RoundBtn outline={props.outline}>
                <ArrowIcon rotate={props.rotate} outline={props.outline}/>
            </RoundBtn>
    )
}

export default ArrowButton;