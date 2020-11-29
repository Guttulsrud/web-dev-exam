import React, {useState, useEffect, createContext} from 'react';
import axios from 'axios';

export const UserContext = createContext()

export const UserProvider = (props) => {
    const [user, setUser] = useState({id: "id", name: "Kek", privileges: "privileges", username:"username", password: "password"})
    const [users, setUsers] = useState([])

    useEffect(() => {
           fetchData()
    }, [])

    const fetchData = () => {
        const url = 'https://localhost:5001/user'
        axios.get(url).then(res => {
            setUsers(res.data);
        });
    }


    return (
        <UserContext.Provider value={{users: [users, setUsers], user: [user, setUser], fetchData}}>
            {props.children}
        </UserContext.Provider>
    )
}