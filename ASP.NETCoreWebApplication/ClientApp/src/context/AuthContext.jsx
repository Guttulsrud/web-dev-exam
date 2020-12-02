import React, {createContext, useEffect, useState} from 'react';

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const initialUser = () => window.localStorage.getItem("user")
    const initialAuth = JSON.parse(window.localStorage.getItem("isLoggedIn"))
    const [user, setUser] = useState(initialUser)
    const [isLoggedIn, setLoggedIn] = useState(initialAuth)

    useEffect(() => {
        window.localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn))
        window.localStorage.setItem("user", user)
    }, [isLoggedIn, user])

    const handleLogin = (user, state) => {
        setUser(user)
        setLoggedIn(state)
    }

    return (
        <AuthContext.Provider value={{isLoggedIn, user, handleLogin}}>
            {children}
        </AuthContext.Provider>
    )
}