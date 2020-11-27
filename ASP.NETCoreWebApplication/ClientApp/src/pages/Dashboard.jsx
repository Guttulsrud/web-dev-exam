import React from 'react';

import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";


export const Dashboard = () => {
    return (
        <React.Fragment>
            <Button as={Link} to={"users"}>Users</Button>
            <Button as={Link} to={"game"}>Game</Button>
            <Button as={Link} to={"accessories"}>Accessories</Button>
            <Button as={Link} to={"settings"}>Settings</Button>
        </React.Fragment>
    );
};