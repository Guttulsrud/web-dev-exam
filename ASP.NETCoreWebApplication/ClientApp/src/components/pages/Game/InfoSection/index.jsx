import React, {useContext} from 'react';
import {Section} from "../../../base/Section";
import {Container} from "react-bootstrap";
import {Paragraph} from "../../../base/Paragraph";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Subtitle} from "../../../base/Subtitle";
import {BoxArt, BoxArtWrapper, Price} from "./style";
import {SingleGameContext} from "../../../../context/SingleGameContext";

const InfoSection = () => {
    const {game} = useContext(SingleGameContext);
    const [singleGame] = game

    return (
        <Section>
            <Container>
                <Subtitle>{singleGame.subtitle}</Subtitle>
                <Row className={"d-flex align-items-center align-content-center"}>

                    <Col lg={"6"} >
                        <Paragraph>
                            {singleGame.description2}
                        </Paragraph>
                    </Col>

                    <Col lg={"6"} className={"d-flex justify-content-center"}>

                        <BoxArtWrapper>
                            <BoxArt backgroundImage={singleGame.gameBoxImage}></BoxArt>
                            <Price>Price ${singleGame.price}</Price>
                        </BoxArtWrapper>

                    </Col>

                </Row>

            </Container>
        </Section>
    )
}

export default InfoSection;