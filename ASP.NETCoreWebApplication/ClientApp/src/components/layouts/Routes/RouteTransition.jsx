import React from 'react';
import {Route} from 'react-router-dom';
import MountTransition from './MountTransition';

const RouteTransition = ({exact, path, children, slide = 0, slideUp = 0, ...rest}) => {
    return (
        <Route exact={exact} path={path}{...rest}>
            <MountTransition slide={slide} slideUp={slideUp}>
                {children}
            </MountTransition>
        </Route>
    );
};
export default RouteTransition;