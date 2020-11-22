import React from 'react';
import Col from 'react-bootstrap/Col';
import {Card, CardContainer, CardTitle, CardCategory, Hover, CardImage} from './style';


const GameCard = ({id,title,category,backgroundImage}) => {

    return (
        <Col xs={12} lg={3} style={{ marginBottom: "30px"}}>
            <Card>
                <CardImage backgroundImage={backgroundImage}/>
                <CardContainer>
                    <CardTitle>{title}</CardTitle>
                    <Hover>
                        <CardCategory>{category}</CardCategory>
                    </Hover>
                </CardContainer>
            </Card>
        </Col>

    )
}

export default GameCard;