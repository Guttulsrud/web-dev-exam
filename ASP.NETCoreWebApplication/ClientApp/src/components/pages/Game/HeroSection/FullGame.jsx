import React, {useContext} from 'react';
import { motion } from "framer-motion"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {
    HeroWrapper,
    ThumbWrapper,
    TitleText,
    TitleDesc,
    TitleCat,
    TitleSection,
    Caption,
    SignLogo,
    SectionWrapper,
    Card,
    CardTitle,
    SignLogoSmall
} from './style';
import ScreenThumb from "./ScreenThumb";
import {SingleGameContext} from "../../../../context/SingleGameContext";

const FullGame = () => {

    const {game} = useContext(SingleGameContext);
    const [singleGame] = game

    return (
        <React.Fragment>
            <motion.div
                initial={{ x: 0, opacity: 0}}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: .7, delay: 0 }}
            >

            <HeroWrapper backgroundImage={"forbidden-west.jpg"}>
                <Container>

                    <motion.div
                                initial={{ x: -200, opacity: 0}}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1.5, delay: .2 }}
                    >

                <TitleText>{singleGame.title}</TitleText>

                        <motion.div
                            initial={{ x: 0, opacity: 0}}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1.5, delay: 1.5 }}
                        >
                <TitleDesc>{singleGame.description}</TitleDesc>
                    <TitleCat>{singleGame.category}</TitleCat>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ x: 100, opacity: 0}}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                    >
                <div>

                    <motion.div
                        initial={{ x: 0, opacity: 0}}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2, delay: 1.5}}
                    >
                <Caption>Screenshots</Caption>
                    </motion.div>
                <ThumbWrapper>

                    <ScreenThumb image={"screenshots/horizon/1.jpg"}/>
                    <ScreenThumb image={"screenshots/horizon/2.jpg"}/>
                    <ScreenThumb image={"screenshots/horizon/3.jpg"}/>
                </ThumbWrapper>
                </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: 0, opacity: 0}}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.5, delay: 1.5 }}
                    >
                    <SignLogoSmall></SignLogoSmall>
                    </motion.div>
                </Container>
            </HeroWrapper>

            </motion.div>
        </React.Fragment>
    )
}

export default FullGame;