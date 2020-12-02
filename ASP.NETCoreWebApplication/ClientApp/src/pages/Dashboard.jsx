import React from 'react';

import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";
import {EntityProvider} from "../context/EntityContext";


export const Dashboard = () => {
    return (
        <React.Fragment>
            <div className={'d-flex justify-content-between align-content-center align-items-center mt-5 mb-3'}>
                <h1>Dashboard</h1>
            </div>
            <ul className={"dashboard-links"}>
                <li><Link to={"admin/games"}>Edit Game</Link></li>
                <li><Link to={"admin/gamecharacters"}>Edit Game Characters</Link></li>
                <li><Link to={"admin/accessories"}>Edit Accessories</Link></li>
                <li><Link to={"admin/users"}>Edit Users</Link></li>
            </ul>
        </React.Fragment>
    );
};