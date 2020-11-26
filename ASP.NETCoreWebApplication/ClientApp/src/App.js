import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Home} from './pages/Home';
import {Games} from './pages/Games';
import {Accessories} from './pages/Accessories';
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
import AnimatedRoutes from './components/layouts/Routes/AnimatedRoutes';
import RouteTransition from './components/layouts/Routes/RouteTransition';


export default () => {
    return (
        <BrowserRouter>
        <Layout>
            <AnimatedRoutes exitBeforeEnter initial={false}>
                <RouteTransition  path={"/"} children={<Home/>} />
                <RouteTransition  path={"/accessories"} children={<Accessories/>} />
                <RouteTransition  path={"/games"} children={<Games/>} />
                <RouteTransition  path={"/game"} children={<Game/>} />
                <RouteTransition  path={"/game2"} children={<Game2/>} />
                <RouteTransition  path={"/game3"} children={ <Game3/>}/>
                <RouteTransition  path={"/assets"} children={<Assets/>} />
                <RouteTransition  path={"/login"} children={<Login/>} />
                <RouteTransition  path={"/users"} children={<Users/>} />
                <RouteTransition exact path={"/swiper"} children={ <Swipe/>} />
            </AnimatedRoutes>

            {/*
             <Route exact path="/" component={Home}/>
                    <Route path="/games" component={Games}/>
                    <Route path="/accessories" component={Accessories}/>
                    <Route path="/game" component={Game}/>
                    <Route path="/game2" component={Game2}/>
                    <Route path="/game3" component={Game3}/>
                    <Route path="/assets" component={Assets}/>
                    <Route path="/login" component={Login}/>
                    <Route exact path="/users" component={Users}/>
            */}
{/*
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/games" component={Games}/>
                    <Route path="/accessories" component={Accessories}/>
                    <Route path="/game" component={Game}/>
                    <Route path="/game2" component={Game2}/>
                    <Route path="/game3" component={Game3}/>
                    <Route path="/assets" component={Assets}/>
                    <Route path="/login" component={Login}/>
                    <Route exact path="/users" component={Users}/>
                    <Route exact path="/swiper" component={Swipe}/>
                </Switch>*/}
        </Layout>
        </BrowserRouter>
    );
}
