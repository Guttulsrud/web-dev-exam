import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Home} from './pages/Home';
import {Game} from './pages/Game';
import {Game2} from './pages/Game2';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
import Layout from './components/Layout';




export default () => {



    return (
        <Layout>
            <BrowserRouter>
                <Route exact path="/" component={Home}/>
                <Route path="/game" component={Game}/>
                <Route path="/game2" component={Game2}/>
            </BrowserRouter>
        </Layout>
    );
}
