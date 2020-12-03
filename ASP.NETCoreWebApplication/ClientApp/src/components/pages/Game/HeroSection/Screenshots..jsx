import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Thumbnail} from './style2';
import PropTypes from 'prop-types';

const Screenshots = ({screenshots}) => {
    const getScreenshots = () => {
        return screenshots.map((screenshot, i) => {
            return <Col xs={12} lg={4} key={`id-${i}`}><Thumbnail id={i} backgroundImage={screenshot}/></Col>;
        });
    };

    return (
        <Row>
            {getScreenshots()}
        </Row>
    );
};

Screenshots.propTypes = {
    screenshots: PropTypes.array.isRequired
};

export default Screenshots;