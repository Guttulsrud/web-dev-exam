import React, {Component} from 'react';
import {Route} from "react-router-dom";
import {Layout} from './components/Layout';
import {Home} from './components/Home';
import './custom.css'
import AllUsers from "./views/AllUsers";
import CreateUser from "./components/CreateUser";


export default () => {
    return (
        <Layout>
            <Route exact path='/' component={Home}/>
            <Route path='/users' component={AllUsers}/>
            <Route path='/create-user' component={CreateUser}/>
        </Layout>
    );
}
