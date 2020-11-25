import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import HeaderSection from '../components/pages/Home/HeaderSection/HeaderSection';
import LinkSection from '../components/pages/Home/LinkSection/LinkSection';
import PsLoading from '../components/Loading';

export const Home = () => {
    const [data, setData] = useState([]);
    const axios = require('axios');

    const fetchApiData = () => {
        axios(
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
        <React.Fragment>
            <HeaderSection/>
            <PsLoading/>
            <LinkSection/>
        </React.Fragment>
    );
};
