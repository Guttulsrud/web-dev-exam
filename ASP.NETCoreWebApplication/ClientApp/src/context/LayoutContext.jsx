import React, {createContext, useState} from 'react';

export const LayoutContext = createContext()

export const LayoutProvider = ({children}) => {
    const [isDark, setIsDark] = useState(false)

    return (
        <LayoutContext.Provider value={{isDark: [isDark, setIsDark]}}>
            {children}
        </LayoutContext.Provider>
    )
}