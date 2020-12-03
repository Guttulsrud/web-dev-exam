import React, {useState} from 'react';
import Col from 'react-bootstrap/Col';
import {ThumbWrapper, Thumb, ThumbButton, Overlay, Hover} from './style';
import ZoomIcon from "./ZoomIcon";
import OpenThumb from "./OpenThumb";
import PropTypes from "prop-types"

const GameThumb = ({small, image}) => {

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Col xs={6} s={6} md={6} lg={4} style={{ marginBottom: "30px"}}>
            <ThumbWrapper>
                <Thumb small={small} backgroundImage={image}>
                    <Overlay small={small}>
                        <Hover>
                            <ThumbButton onClick={() => setOpen(true)}><ZoomIcon/></ThumbButton>

                        </Hover>
                    </Overlay>
                </Thumb>
            </ThumbWrapper>
            {open && (<OpenThumb onClick={() => setOpen(false)} image={image} handleClose={handleClose}/>)}
        </Col>

    )
}

GameThumb.propTypes = {
    small: PropTypes.bool,
    image: PropTypes.string.isRequired
}

export default GameThumb;