import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Home} from './pages/Home';
import {Game} from './pages/Game';
import {Game2} from './pages/Game2';
import {Game3} from './pages/Game3';
import {Assets} from './pages/Assets';

import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
import Layout from './components/Layout';





export default () => {



    return (
        <BrowserRouter>
        <Layout>

                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/game" component={Game}/>
                    <Route path="/game2" component={Game2}/>
                    <Route path="/game3" component={Game3}/>
                    <Route path="/assets" component={Assets}/>
                </Switch>

        </Layout>
        </BrowserRouter>
    );
}
