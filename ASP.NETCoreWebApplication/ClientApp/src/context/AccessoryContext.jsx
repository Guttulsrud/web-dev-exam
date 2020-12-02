import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';


export const AccessoryContext = createContext();

export const AccessoryProvider = ({children, endpoint}) => {

    const [accessory, setAccessories] = useState([{}])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const url = `https://localhost:5001/${endpoint}`;
        await axios.get(url).then(res => {
            setAccessories(res.data);
            console.log(res.data);
        }).then(() => setLoading(false));
    };
    return (
        <AccessoryContext.Provider value={{accessory: [accessory, setAccessories]}}>
            {children}
        </AccessoryContext.Provider>
    )
}