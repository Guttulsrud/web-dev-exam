import React from 'react';
import {OpenWrapper, ImageContainer, ScreenImg} from './style';
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons/faTimesCircle';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import PropTypes from "prop-types"

const OpenThumb = (props) => {
    return (
        <OpenWrapper>
            <ImageContainer>

                <ScreenImg src={`${props.image}`} alt={'Screenshot from game'}/>
                <FontAwesomeIcon style={{position: 'absolute', top: '-20', right: '-20', cursor: 'pointer'}}
                                 onClick={props.handleClose} icon={faTimesCircle} color={'#FFFFFF'} size={'2x'}/>
            </ImageContainer>
        </OpenWrapper>
    );
};

OpenThumb.propTypes = {
    image: PropTypes.string.isRequired,
    handleClose: PropTypes.func.isRequired
}


export default OpenThumb;