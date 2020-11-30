import React from 'react';
import {Col} from "react-bootstrap";
import {Card} from './style';

const AccessoriesCard = ({col, id, title, description, image, price}) => {
    return (
        <Col lg={col}>


            <Card>
                <img src={`accessories/${image}`} alt="Accessory"/>
                Accessories
                {id}
                {title}
                {description}
                {image}
                {price}
            </Card>

        </Col>
    )
}

export default AccessoriesCard;