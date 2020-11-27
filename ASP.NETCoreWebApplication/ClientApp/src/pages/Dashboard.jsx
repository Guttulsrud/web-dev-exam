import React from 'react';

import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";


export const Dashboard = () => {
    return (
        <React.Fragment>
            <Button as={Link} to={"admin/users"}>Edit Users</Button>
            <Button as={Link} to={"admin/game"}>Edit Game</Button>
            <Button as={Link} to={"admin/accessories"}>Edit Accessories</Button>
            <Button as={Link} to={"admin/settings"}>Edit Settings</Button>
        </React.Fragment>
    );
};