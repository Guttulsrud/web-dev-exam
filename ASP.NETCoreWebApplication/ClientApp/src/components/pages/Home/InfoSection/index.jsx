import React, {useEffect, useState} from 'react';
import {Section} from '../../../base/Section';
import {SectionTitle} from '../../../base/SectionTitle';
import {SectionText} from '../../../base/SectionText';
import {SignLogo} from '../../../common/SignLogo';
import Container from 'react-bootstrap/Container';
import {Video, VideoOverlay} from './style';
import {Button} from '../../../base/Button';
import {Link, useHistory, useLocation} from 'react-router-dom';

const InfoSection = (props) => {
    const [offset, setOffset] = useState(0);

    const history = useHistory()
    const handleRedirect = () => {
        history.push("/devices")
    }


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
        <Section noMarginBottom blue height={'700'}>
            <Container className={"h-100 pb-5"}>
                <div className={"d-flex flex-column h-100 justify-content-between"}>
                    <SectionTitle center white>Play Has No Limits</SectionTitle>
                    <SectionText center white>Experience lightning-fast loading with an ultra-high speed SSD,
                        deeper immersion with support for haptic feedback, adaptive triggers and 3D Audio, and an
                        all-new generation of incredible PlayStation® games.</SectionText>
                    <Button outline isWhite zIndex={11} className={"align-self-center justify-self-center"}
                            onClick={handleRedirect}>
                        Read more
                    </Button>
                </div>
                <Video src={'PS5-2.mp4'} autoPlay muted loop/>
                <VideoOverlay/>
            </Container>
        </Section>
    );
};

export default InfoSection;