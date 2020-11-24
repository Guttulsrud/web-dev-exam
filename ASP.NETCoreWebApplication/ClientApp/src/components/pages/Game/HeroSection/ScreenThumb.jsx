import React, {useState} from 'react';
import {Thumb, ThumbCaption, TitleText} from './style';

const ScreenThumb = ({image, title}) => {
    const [isHovered, setHovered] = useState(false)
    return (
        <Thumb backgroundImage={image} onMouseOver={() => setHovered(true) } onMouseLeave={() => setHovered(false)}>
            {isHovered && <ThumbCaption>View</ThumbCaption>}
        </Thumb>
    )
}

export default ScreenThumb