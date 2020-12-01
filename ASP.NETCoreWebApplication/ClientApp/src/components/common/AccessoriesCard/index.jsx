import React from 'react';
import {Col} from "react-bootstrap";
import {CardWrapper, Card, CardBack, Overlay, Wave, CardTitle, CardDesc, CardBody, CardImage} from './style';

const AccessoriesCard = ({col, id, title, description, image, price}) => {
    return (
        <Col lg={col}>
            <CardWrapper>


            <Card>

                    <CardBody>
                    <CardTitle>{title}</CardTitle>
                    <CardDesc>{description}</CardDesc>
                    </CardBody>
                    <CardImage backgroundImage={image}/>
                    <Wave/>

            </Card>
                <CardBack/>


            </CardWrapper>
        </Col>
    )
}

export default AccessoriesCard;