import React from 'react';
import Col from 'react-bootstrap/Col';
import {ThumbWrapper, Thumb, ThumbButton, Overlay, Hover} from './style';
import ZoomIcon from "./ZoomIcon";

const GameThumb = ({backgroundImage}) => {
    return (
        <Col xs={6} s={6} md={6} lg={4} style={{ marginBottom: "30px"}}>
            <ThumbWrapper>
                <Thumb backgroundImage={backgroundImage}>
                    <Overlay>
                        <Hover>
                            <ThumbButton><ZoomIcon/></ThumbButton>
                        </Hover>
                    </Overlay>
                </Thumb>
            </ThumbWrapper>
        </Col>

    )
}

export default GameThumb;