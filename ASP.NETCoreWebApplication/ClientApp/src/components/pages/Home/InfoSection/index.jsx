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

            <Container>

                    <SectionTitle white right>Play Has No Limits</SectionTitle>

            </Container>
        </Section>
    )
}

export default InfoSection;