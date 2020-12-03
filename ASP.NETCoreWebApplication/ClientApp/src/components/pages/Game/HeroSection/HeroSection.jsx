import React from 'react';
import Container from 'react-bootstrap/Container';
import { HeroWrapper, TitleDesc, GameLogo, SignLogo } from './style2';
import Screenshots from "./Screenshots.";
import {motion} from "framer-motion";
import PropTypes from "prop-types"


const HeroSection = ({game}) => {

    return (
        <>
            <motion.div
                initial={{ x: 0, opacity: 0}}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: .7, delay: 0 }}
            >
            <HeroWrapper backgroundImage={game.bgImage}>
                <Container>
                    <motion.div
                        initial={{ y: 10, opacity: 0}}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: .8, delay: .5 }}
                    >
                        <GameLogo gameLogo={game.gameLogo}/>
                    </motion.div>
                    <motion.div
                        initial={{ y: 10, opacity: 0}}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: .8, delay: .5 }}
                    >
                    <TitleDesc>{game.description}</TitleDesc>
                    </motion.div>

                    <motion.div
                        initial={{ y: 20, opacity: 0}}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: .5}}
                    >
                    <Screenshots screenshots={game.screenshots}/>
                    </motion.div>

                    <motion.div
                        initial={{ y: 20, opacity: 0}}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: .5}}
                    >
                    <SignLogo/>
                    </motion.div>
                </Container>
            </HeroWrapper>
            </motion.div>
        </>
    )
}

HeroSection.propTypes = {
    game: PropTypes.object.isRequired
}

export default HeroSection;