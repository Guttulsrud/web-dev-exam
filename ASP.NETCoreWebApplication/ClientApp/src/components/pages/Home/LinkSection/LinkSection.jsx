import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import IconLink from './IconLink';
import {faPlayCircle } from '@fortawesome/free-solid-svg-icons';

const LinkSection = () => {
    return (
        <section>
            <Container>
                <Row className={"py-4"}>
                    <IconLink icon={faPlayCircle} title={"Go to games"} />
                    <IconLink icon={faPlayCircle} title={"Go to games"} />
                    <IconLink icon={faPlayCircle} title={"Go to games"} />
                </Row>
            </Container>
        </section>
    )
}

export default LinkSection