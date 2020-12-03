import React from 'react';
import {Route} from 'react-router-dom';
import MountTransition from './MountTransition';
import PropTypes from "prop-types"

const RouteTransition = ({exact, path, children, slide = 0, slideUp = 0, ...rest}) => {
    return (
        <Route exact={exact} path={path}{...rest}>
            <MountTransition slide={slide} slideUp={slideUp}>
                {children}
            </MountTransition>
        </Route>
    );
};

RouteTransition.propTypes = {
    children: PropTypes.node.isRequired,
    path: PropTypes.string,
    exact: PropTypes.bool,
    slide: PropTypes.number,
    slideUp: PropTypes.number
}
export default RouteTransition;