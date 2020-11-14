import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Home} from './pages/Home';
import {Game} from './pages/Game';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
import Layout from './components/Layout';

export default () => {
    return (
        <Layout>
            <BrowserRouter>
                <Route exact path="/" component={Home}/>
                <Route path="/game" component={Game}/>
            </BrowserRouter>
        </Layout>
    );
}
