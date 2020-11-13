import React from 'react';
import Col from 'react-bootstrap/Col';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay} from '@fortawesome/free-solid-svg-icons/faPlay';
import {Link} from 'react-router-dom';

const IconLink = ({icon, title}) => {

    return (
        <Col lg={4} className={"text-center"}>
            <Link to={'/'}>
                <FontAwesomeIcon icon={icon} size={"4x"}/>
                <h4>{title}</h4>
            </Link>
        </Col>
    );
};

export default IconLink;