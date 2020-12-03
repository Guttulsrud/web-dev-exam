import React, {createContext, useState} from 'react';
import PropTypes from 'prop-types';

export const LayoutContext = createContext()

export const LayoutProvider = ({children}) => {
    const [isDark, setIsDark] = useState(false)

    return (
        <LayoutContext.Provider value={{isDark: [isDark, setIsDark]}}>
            {children}
        </LayoutContext.Provider>
    )
}

LayoutContext.propTypes = {
    children: PropTypes.node
}