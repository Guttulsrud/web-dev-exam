import React from 'react';
import Col from 'react-bootstrap/Col';
import {Card, CardContainer, CardTitle, CardCategory} from './style';


const GameCard = ({id,title,category,backgroundImage}) => {

    return (
        <Col xs={12} lg={3} style={{ marginBottom: "30px"}}>
            <Card backgroundImage={backgroundImage}>
                <CardContainer>
                    <CardTitle>{title}</CardTitle>
                    <CardCategory>{category}</CardCategory>
                </CardContainer>

            </Card>
        </Col>

    )
}

export default GameCard;