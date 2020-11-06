import React, {useState} from 'react';
import {Button} from "reactstrap";

export const Home = () => {
    const [data, setData] = useState([]);
    const axios = require('axios');
    
    const fetchApiData = () => {axios(
            'https://localhost:5001/user',
        ).then(res => {
            setData(res.data);
        });
    };
    
    const list = () => {
        return data.map((obj, key) => (
            <li key={key}>{obj.name}</li>
        ));

    };

    return (
        <div>
            <h1>Hello, world!</h1>
            <ul>
                {list()}
            </ul>
            <Button onClick={fetchApiData}>Fetch</Button>
        </div>
    );
}
