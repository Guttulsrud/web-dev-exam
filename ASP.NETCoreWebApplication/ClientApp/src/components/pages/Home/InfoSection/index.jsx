import React, {useEffect, useState} from 'react';
import {Section} from "../../../base/Section";
import {SectionTitle} from "../../../base/SectionTitle";
import {SignLogo} from "../../../common/SignLogo";
import Container from "react-bootstrap/Container";


const InfoSection = (props) => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        function handleScroll() {
            setOffset(window.pageYOffset)
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, []);

    return (
        <Section blue height={"500"}>
            <SignLogo right style={{transform: `rotate(20deg) translateY(${offset * 0.2}px)`}}/>
            <Container>

                    <SectionTitle white right>Test</SectionTitle>

            </Container>
        </Section>
    )
}

export default InfoSection;