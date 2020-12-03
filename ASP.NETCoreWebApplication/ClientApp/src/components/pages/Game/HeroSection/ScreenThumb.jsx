import React, {useState} from 'react';
import {Thumb, ThumbCaption} from './style';
import PropTypes from 'prop-types';

const ScreenThumb = ({image}) => {
    const [isHovered, setHovered] = useState(false);
    return (
        <Thumb backgroundImage={image} onMouseOver={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            {isHovered && <ThumbCaption>View</ThumbCaption>}
        </Thumb>
    );
};

ScreenThumb.propTypes = {
    image: PropTypes.string.isRequired
};

export default ScreenThumb;