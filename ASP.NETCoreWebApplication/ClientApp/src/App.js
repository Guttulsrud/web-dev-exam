import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Home} from './pages/Home';
import {Games} from './pages/Games';
import {Devices} from './pages/Devices';
import {Accessories} from './pages/Accessories';
import {Game} from './pages/Game';
import {Search} from './pages/Search';
import {Dashboard} from './pages/Dashboard';
import {AdminGames} from './pages/AdminGames';
import {AdminGameCharacters} from './pages/AdminGameCharacters';
import {AdminUsers} from './pages/AdminUsers';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
import Layout from './components/Layout';
import AdminLayout from './components/AdminLayout';
import Login from './pages/Login';
import AnimatedRoutes from './components/layouts/Routes/AnimatedRoutes';
import RouteTransition from './components/layouts/Routes/RouteTransition';
import NotFound from './pages/NotFound';
import {LayoutProvider} from './context/LayoutContext';
import {AuthProvider} from './context/AuthContext';
import {AdminAccessories} from './pages/AdminAccessories';
import ScrollTop from './components/layouts/ScrollTop';

export default () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <LayoutProvider>
                    <ScrollTop>
                        <Switch>
                            <Route exact path='/admin/:users?'>
                                <AdminLayout>
                                    <Switch>
                                        <Route path='/admin' exact component={Dashboard}/>
                                        <Route path='/admin/games' exact component={AdminGames}/>
                                        <Route path='/admin/users' exact component={AdminUsers}/>
                                        <Route path='/admin/accessories' exact component={AdminAccessories}/>
                                        <Route path='/admin/gamecharacters' exact component={AdminGameCharacters}/>
                                    </Switch>
                                </AdminLayout>
                            </Route>

                            <Layout>
                                <AnimatedRoutes exitBeforeEnter initial={false}>
                                    <RouteTransition exact path={'/accessories'} children={<Accessories/>}/>
                                    <RouteTransition exact path={'/games'} children={<Games/>}/>
                                    <RouteTransition path={'/games/detail/:id'} children={<Game/>}/>
                                    <RouteTransition path={'/search/:query'} children={<Search/>}/>
                                    <RouteTransition path={'/devices'} children={<Devices/>}/>
                                    <RouteTransition path={'/login'} children={<Login/>}/>
                                    <RouteTransition exact path={'/'} children={<Home/>}/>
                                    <RouteTransition children={<NotFound/>}/>
                                </AnimatedRoutes>
                            </Layout>
                        </Switch>
                    </ScrollTop>
                </LayoutProvider>
            </AuthProvider>
        </BrowserRouter>

    );
}
