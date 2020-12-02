import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';


export const SingleGameContext = createContext();

export const SingleGameProvider = ({children, endpoint}) => {

    const [game, setGame] = useState({})
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const url = `https://localhost:5001/game/${endpoint}`;
        await axios.get(url).then(res => {
            setGame(res.data);
        }).then(() => setLoading(false));
    };
    return (
        <SingleGameContext.Provider value={{game: [game, setGame], loading}}>
            {children}
        </SingleGameContext.Provider>
    )
}