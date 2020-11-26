import React, {useEffect, useState} from 'react';
import {Container} from 'react-bootstrap';
import {SignLogo} from '../components/common/SignLogo';
import {Section} from '../components/base/Section';
import {RadialGradient} from '../components/common/RadialGradient';

const NotFound = () => {

    return (
        <Section>
            <Container className={'d-flex min-vh-100'}>
                <div className={'m-auto text-center'} >
                    <h1 style={{fontSize: '10vw', zIndex: 99, position: "relative"}}>
                        <span style={{color: '#0072ce', fontSize: '20vw', fontWeight: "bold"}}>404</span>
                        <br/>
                        Not found
                    </h1>
                </div>
            </Container>
        </Section>
    );
};

export default NotFound;