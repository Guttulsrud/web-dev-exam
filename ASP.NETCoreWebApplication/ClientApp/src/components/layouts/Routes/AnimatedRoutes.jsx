import React from 'react';
import {AnimatePresence} from 'framer-motion';
import {Switch, useLocation} from 'react-router-dom';
import PropTypes from "prop-types"

const AnimatedRoutes = ({children, exitBeforeEnter = true, initial = false}) => {
    const location = useLocation()
    return (
        <AnimatePresence exitBeforeEnter={exitBeforeEnter} initial={initial}>
            <Switch location={location} key={location.pathname}>
                {children}
            </Switch>
        </AnimatePresence>
    )
}

AnimatedRoutes.propTypes = {
    children: PropTypes.node.isRequired,
    exitBeforeEnter: PropTypes.bool.isRequired,
    initial: PropTypes.bool.isRequired
}

export default AnimatedRoutes