import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Home} from './pages/Home';
import {Games} from './pages/Games';
import {Devices} from './pages/Devices';
import {Accessories} from './pages/Accessories';
import {Game} from './pages/Game';
import {Game2} from './pages/Game2';
import {Game3} from './pages/Game3';
import {Assets} from './pages/Assets';

import {Dashboard} from './pages/Dashboard';
import {AdminGames} from './pages/AdminGames';
import {AdminAccessories} from './pages/AdminAccessories';
import {AdminGameCharacters} from './pages/AdminGameCharacters';
import {AdminUsers} from './pages/AdminUsers';
import {AdminSettings} from './pages/AdminSettings';

import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
import Layout from './components/Layout';
import AdminLayout from './components/AdminLayout';
import Login from './pages/Login';
import Swipe from './pages/Swipe';
import AnimatedRoutes from './components/layouts/Routes/AnimatedRoutes';
import RouteTransition from './components/layouts/Routes/RouteTransition';
import NotFound from './pages/NotFound';
import {LayoutProvider} from './context/LayoutContext';
import {AuthProvider} from './context/AuthContext';

export default () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <LayoutProvider>
                    <Switch>
                        <Route exact path='/admin/:users?'>
                            <AdminLayout>
                                <Switch>
                                    <Route path='/admin' exact component={Dashboard}/>
                                    <Route path='/admin/games' exact component={AdminGames}/>
                                    <Route path='/admin/users' exact component={AdminUsers}/>
                                    <Route path='/admin/gamecharacters' exact component={AdminGameCharacters}/>
                                    <Route path='/admin/accessories' exact component={AdminAccessories}/>
                                    <Route path='/admin/settings' exact component={AdminSettings}/>
                                </Switch>
                            </AdminLayout>
                        </Route>
                        <Layout>
                            <AnimatedRoutes exitBeforeEnter initial={false}>
                                <RouteTransition exact path={'/accessories'} children={<Accessories/>}/>
                                <RouteTransition exact path={'/games'} children={<Games/>}/>
                                <RouteTransition path={'/games/detail/:id'} children={<Game/>}/>
                                <RouteTransition path={'/game2'} children={<Game2/>}/>
                                <RouteTransition path={'/game3'} children={<Game3/>}/>
                                <RouteTransition path={'/assets'} children={<Assets/>}/>
                                <RouteTransition path={'/login'} children={<Login/>}/>
                                <RouteTransition exact path={'/swiper'} children={<Swipe/>}/>
                                <RouteTransition exact path={'/'} children={<Home/>}/>
                                <RouteTransition children={<NotFound/>}/>
                            </AnimatedRoutes>
                        </Layout>
                    </Switch>
                </LayoutProvider>
            </AuthProvider>
        </BrowserRouter>

    );
}
