import React, {useEffect, useState} from 'react';
import {Section} from '../../../base/Section';
import {SectionTitle} from '../../../base/SectionTitle';
import {SignLogo} from '../../../common/SignLogo';
import Container from 'react-bootstrap/Container';
import {Video, VideoOverlay} from './style';
import {Button} from '../../../base/Button';
import {Link} from 'react-router-dom';

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
        <Section blue height={'700'}>
            <Container className={"h-100 pb-5"}>
                <div className={"d-flex flex-column h-100 justify-content-between"}>
                <SectionTitle white right>Play Has No Limits</SectionTitle>
                <Button as={Link} to={"/playstation"} outline isWhite zIndex={11} className={"align-self-end justify-self-end"}>
                    Explore
                </Button>
                </div>
                <Video src={'PS5-2.mp4'} autoPlay muted loop/>
                <VideoOverlay/>
            </Container>
        </Section>
    );
};

export default InfoSection;