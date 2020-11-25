import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Home} from './pages/Home';
import {Game} from './pages/Game';
import {Game2} from './pages/Game2';
import {Game3} from './pages/Game3';
import {Assets} from './pages/Assets';
import {Users} from './pages/Users';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
import Layout from './components/Layout';
import Login from './pages/Login';
import Swipe from './pages/Swipe';


export default () => {
    return (
        <BrowserRouter>
        <Layout>

                <Switch>
                    <Route exact path="/home" component={Home}/>
                    <Route path="/game" component={Game}/>
                    <Route path="/game2" component={Game2}/>
                    <Route path="/game3" component={Game3}/>
                    <Route path="/assets" component={Assets}/>
                    <Route path="/login" component={Login}/>
                    <Route exact path="/users" component={Users}/>
                    <Route exact path="/swiper" component={Swipe}/>
                </Switch>
        </Layout>
        </BrowserRouter>
    );
}
