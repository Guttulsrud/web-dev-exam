import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Home} from './pages/Home';
import './custom.css';
import Layout from './components/Layout';

export default () => {
    return (
        <Layout>
            <BrowserRouter>
                <Route exact path="/" component={Home}/>
            </BrowserRouter>
        </Layout>
    );
}
