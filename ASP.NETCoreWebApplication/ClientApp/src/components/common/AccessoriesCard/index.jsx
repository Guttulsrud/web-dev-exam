import React from 'react';
import PropTypes from 'prop-types';
import {Col} from 'react-bootstrap';
import {
    CardWrapper,
    Card,
    CardBack,
    Wave,
    CardTitle,
    CardDesc,
    CardBody,
    CardImage,
    SignLogo,
    LogoWrapper
} from './style';
import Ps5Logo from '../GameCard/Ps5Logo';

const AccessoriesCard = ({col, name, description, image}) => {
    return (
        <Col lg={col}>
            <CardWrapper>
                <Card>
                    <CardBody>
                        <CardTitle>{name}</CardTitle>
                        <CardDesc>{description}</CardDesc>
                    </CardBody>
                    <CardImage backgroundImage={image}/>
                    <Wave/>
                </Card>
                <CardBack>
                    <SignLogo/>
                    <LogoWrapper>
                        <Ps5Logo/>
                    </LogoWrapper>
                </CardBack>
            </CardWrapper>
        </Col>
    );
};

AccessoriesCard.propTypes = {
    col: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default AccessoriesCard;