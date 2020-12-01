import React, {useState, useEffect, createContext} from 'react';
import axios from 'axios';

export const EntityContext = createContext()

export const EntityProvider = ({children, endpoint}) => {
    const [entities, setEntities] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
           fetchData()
    }, [])

    const fetchData = () => {
        setLoading(true)
        const url = `https://localhost:5001/${endpoint}`
        axios.get(url).then(res => {
            setEntities(res.data);
        }).then(() => setLoading(false));
    }
    
    
    const setData = (data) => {
        setEntities(data)
        console.log(data)
    }

    return (
        <EntityContext.Provider value={{entities: [entities, setEntities], setData , fetchData, loading}}>
            {children}
        </EntityContext.Provider>
    )
}