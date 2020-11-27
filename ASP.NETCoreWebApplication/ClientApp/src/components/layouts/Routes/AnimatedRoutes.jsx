import React from 'react';
import {AnimatePresence} from 'framer-motion';
import {Switch, useLocation} from 'react-router-dom';
import Layout from "../../Layout";

const AnimatedRoutes = ({children, exitBeforeEnter = true, initial = false}) => {
    const location =  useLocation()
    return (
        <AnimatePresence exitBeforeEnter={exitBeforeEnter} initial={initial}>
            <Switch location={location} key={location.pathname}>

                {children}

            </Switch>
        </AnimatePresence>
    )
}

export default AnimatedRoutes