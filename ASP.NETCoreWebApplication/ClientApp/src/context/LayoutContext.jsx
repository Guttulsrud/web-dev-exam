import React, {createContext, useState} from 'react';

export const LayoutContext = createContext()

export const LayoutProvider = ({children}) => {
    const [isDark, setIsDark] = useState(false)

    const handleDark = (state) => {
        setIsDark(state)
    }

    return (
        <LayoutContext.Provider value={{isDark: [isDark, setIsDark], handleDark}}>
            {children}
        </LayoutContext.Provider>
    )
}