import React, {useEffect, useState} from 'react';
import {Container} from 'react-bootstrap';
import {SignLogo} from '../components/common/SignLogo';
import {Section} from '../components/base/Section';
import {RadialGradient} from '../components/common/RadialGradient';

const NotFound = () => {

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        function handleScroll() {
            setOffset(window.pageYOffset);
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Section>
            <RadialGradient/>
            <Container className={'d-flex min-vh-100'}>
                <div className={'m-auto text-center'} >
                    <h1 style={{fontSize: '10vw', zIndex: 99, position: "relative"}}>
                        <span style={{color: '#0072ce', fontSize: '20vw', fontWeight: "bold"}}>404</span>
                        <br/>
                        Not found
                    </h1>
                </div>
            </Container>
            <SignLogo style={{transform: `rotate(20deg) translateY(${offset * 0.4}px)`}}/>
        </Section>
    );
};

export default NotFound;