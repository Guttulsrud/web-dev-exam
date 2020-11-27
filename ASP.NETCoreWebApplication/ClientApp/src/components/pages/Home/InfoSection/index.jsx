import React, {useEffect, useState} from 'react';
import {Section} from '../../../base/Section';
import {SectionTitle} from '../../../base/SectionTitle';
import {SignLogo} from '../../../common/SignLogo';
import Container from 'react-bootstrap/Container';
import {Video} from './style';

const InfoSection = (props) => {
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
        <Section blue height={'500'}>
            <Container>
                <SectionTitle white right>Play Has No Limits</SectionTitle>
                <Video src={'PS5-2.mp4'} autoPlay muted loop />
                <div style={{backgroundColor: "rgba(0,93,195,0.89)", height: "100%", width: "100%", position: "absolute", zIndex: 10, top: 0, left: 0}}/>
            </Container>
        </Section>
    );
};

export default InfoSection;