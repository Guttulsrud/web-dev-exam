import React from 'react';
import Container from 'react-bootstrap/Container';



import { HeroWrapper, TitleDesc, GameLogo, SignLogo } from './style2';
import Screenshots from "./Screenshots.";
import {motion} from "framer-motion";


const HeroSection = (props) => {

    return (
        <>
            <motion.div
                initial={{ x: 0, opacity: 0}}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: .7, delay: 0 }}
            >
            <HeroWrapper backgroundImage={props.game.bgImage}>
                <Container>



                    <motion.div
                        initial={{ y: 10, opacity: 0}}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: .8, delay: .5 }}
                    >
                        <GameLogo gameLogo={props.game.gameLogo}/>
                    </motion.div>

                    <motion.div
                        initial={{ y: 10, opacity: 0}}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: .8, delay: .5 }}
                    >
                    <TitleDesc>{props.game.description}</TitleDesc>
                    </motion.div>

                    <motion.div
                        initial={{ y: 20, opacity: 0}}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: .5}}
                    >
                    <Screenshots screenshots={props.game.screenshots}></Screenshots>
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

export default HeroSection;