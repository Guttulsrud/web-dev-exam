import React, {useContext} from 'react';
import {SidebarWrapper} from './style';
import Button from "react-bootstrap/Button";
import {Link, NavLink, useHistory} from 'react-router-dom';
import Nav from "react-bootstrap/cjs/Nav";
import Navbar from "react-bootstrap/cjs/Navbar";
import {AuthContext} from '../../../context/AuthContext';

const Sidebar = () => {
    const {handleLogin} = useContext(AuthContext)
    const history = useHistory()

    const handleLogout = () => {
        handleLogin(false)
    }

    return (
            <>
                <SidebarWrapper>
                    <ul className={"nav sidebar-links flex-column"}>
                        <li className={"nav-item"}>
                            <NavLink to="/admin" className={"sidebar-link"} activeClassName="activeRouteSidebar">Dashboard</NavLink>
                        </li>
                        <li className={"nav-item"}>
                            <NavLink to="/admin/games" className={"sidebar-link"} activeClassName="activeRouteSidebar">Games</NavLink>
                        </li>
                        <li className={"nav-item"}>
                            <NavLink to="/admin/gamecharacters" className={"sidebar-link"} activeClassName="activeRouteSidebar">Game Characters</NavLink>
                        </li>
                        <li className={"nav-item"}>
                            <NavLink to="/admin/accessories" className={"sidebar-link"} activeClassName="activeRouteSidebar">Accessories</NavLink>
                        </li>
                        <li className={"nav-item"}>
                            <NavLink to="/admin/users" className={"sidebar-link"} activeClassName="activeRouteSidebar">Users</NavLink>
                        </li>
                        <li className={"nav-item"}>
                            <NavLink to="/admin/settings" className={"sidebar-link"} activeClassName="activeRouteSidebar">Settings</NavLink>
                        </li>
                        <li className={"nav-item"}>
                            <NavLink to={"/"} onClick={handleLogout} className={"sidebar-link"} activeClassName="activeRouteSidebar">Log out</NavLink>
                        </li>
                        <li className={"nav-item"}>
                            <NavLink to="/" className={"sidebar-link"} activeClassName="activeRouteSidebar">Back</NavLink>
                        </li>
                    </ul>
                    {/*
                                        <ul>
                        <li><Link activeClassName="activeRoute" activeStyle={{color: '#0070D1'}} to={"/admin"}>Dashboard</Link></li>
                        <li><Link activeClassName="activeRoute" activeStyle={{color: '#0070D1'}} to={"/admin/users"}>AdminUsers</Link></li>
                        <li><Link to={"/admin/game"}>Game</Link></li>
                        <li><Link to={"/admin/accessories"}>Accessories</Link></li>
                        <li><Link to={"/admin/settings"}>Settings</Link></li>
                        <li><Link to={"#"}>Log out</Link></li>
                    </ul>
                    */}

                </SidebarWrapper>
            </>
    )
}
export default Sidebar;