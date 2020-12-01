import React, {createContext, useState} from 'react';

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [isLoggedIn, setLoggedIn] = useState(false)

    const handleLogin = (state) => {
        setLoggedIn(state)
    }

    return (
        <AuthContext.Provider value={{isLoggedIn: [isLoggedIn, setLoggedIn], handleLogin}}>
            {children}
        </AuthContext.Provider>
    )
}