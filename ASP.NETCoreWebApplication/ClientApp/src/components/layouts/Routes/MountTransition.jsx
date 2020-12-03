import React from 'react';
import {motion} from 'framer-motion';
import PropTypes from "prop-types"

const MountTransition = ({children, slide = 0, slideUp = 0}) => {
    return (
        <motion.div
            exit={{opacity: 0, x: slide, y: slideUp}}
            initial={{opacity: 0, x: slide, y: slideUp}}
            animate={{opacity: 1, x: 0, y: 0}}>
            {children}
        </motion.div>
    );
};

MountTransition.propTypes = {
    children: PropTypes.node.isRequired,
    slide: PropTypes.number,
    slideUp: PropTypes.number
}

export default MountTransition;