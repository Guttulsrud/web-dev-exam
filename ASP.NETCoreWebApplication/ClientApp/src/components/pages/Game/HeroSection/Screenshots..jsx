import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Thumbnail } from './style2';


const Screenshots = ( props ) => {
    const getScreenshots = () => {
        return props.screenshots.map((screenshot, i) => {
            return <Col xs={12} lg={4} key={`id-${i}`}><Thumbnail id={i} backgroundImage={screenshot}/></Col>
        });
    }

    return (
        <Row>
            {getScreenshots()}
        </Row>
    )
}

export default Screenshots;