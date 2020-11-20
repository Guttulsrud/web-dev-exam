import React from 'react';

import {RoundBtn} from './style';
import ArrowIcon from "./ArrowIcon";

const ArrowButton = (props) => {
    return (
            <RoundBtn>
                <ArrowIcon rotate={props.rotate}/>
            </RoundBtn>
    )
}

export default ArrowButton;