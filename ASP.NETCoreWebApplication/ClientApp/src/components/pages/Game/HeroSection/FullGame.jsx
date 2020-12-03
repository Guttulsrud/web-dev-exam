import React, {useContext, useEffect} from 'react';
import {motion} from "framer-motion"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import {
    HeroWrapper,
    ScreenshotWrapper,
    TitleText,
    TitleDesc,
    TitleCat,
    Caption,
    SignLogoSmall,
    ScreenshotsArea
} from './style';
import {SingleGameContext} from '../../../../context/SingleGameContext';
import GameThumb from "../../../common/GameThumb/GameThumb";
import {LayoutContext} from '../../../../context/LayoutContext';

const FullGame = () => {
    const {game} = useContext(SingleGameContext);
    const [singleGame] = game
    const {isDark} = useContext(LayoutContext)
    const [darkState, setDark] = isDark
    const [gameState, setGame] = game

    useEffect(() => {
        if (gameState.isDark) {
            setDark(true)
        }
        return () => {
            setDark(false);
        }
    }, [gameState])

    const generateScreenshots = () => {
        return singleGame.screenshots ? singleGame.screenshots.slice(0, 3).map((image, index) => (
            <GameThumb key={`screenshot${index}`} small image={image}/>
        )) : null
    }

    return (
        <React.Fragment>
            <motion.div
                initial={{x: 0, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: .7, delay: 0}}
            >

                <HeroWrapper backgroundImage={singleGame.featureImage}>
                    <Container>
                        <motion.div
                            initial={{x: -200, opacity: 0}}
                            animate={{x: 0, opacity: 1}}
                            transition={{duration: 1.5, delay: .2}}
                        >
                            <TitleText>{singleGame.title}</TitleText>
                            <motion.div
                                initial={{x: 0, opacity: 0}}
                                animate={{x: 0, opacity: 1}}
                                transition={{duration: 1.5, delay: 1.5}}
                            >
                                <TitleDesc>{singleGame.description}</TitleDesc>
                                <TitleCat>{singleGame.category}</TitleCat>
                                <TitleCat>Release: {singleGame.year}</TitleCat>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{x: 100, opacity: 0}}
                            animate={{x: 0, opacity: 1}}
                            transition={{duration: 1, delay: 1.2}}
                        >
                            <div>
                                <ScreenshotsArea>
                                    <motion.div
                                        initial={{x: 0, opacity: 0}}
                                        animate={{x: 0, opacity: 1}}
                                        transition={{duration: 2, delay: 1.5}}
                                    >
                                        <Caption>Screenshots</Caption>
                                    </motion.div>
                                    <ScreenshotWrapper>
                                        <Row>
                                            {generateScreenshots()}
                                        </Row>
                                    </ScreenshotWrapper>
                                </ScreenshotsArea>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{x: 0, opacity: 0}}
                            animate={{x: 0, opacity: 1}}
                            transition={{duration: 1.5, delay: 1.5}}
                        >
                            <SignLogoSmall/>
                        </motion.div>
                    </Container>
                </HeroWrapper>
            </motion.div>
        </React.Fragment>
    )
}

export default FullGame;