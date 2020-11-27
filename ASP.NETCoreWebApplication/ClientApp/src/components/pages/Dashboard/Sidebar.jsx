import React from 'react';
import {SidebarWrapper} from './style';
import Button from "react-bootstrap/Button";
import {Link, NavLink} from "react-router-dom";
import Nav from "react-bootstrap/cjs/Nav";
import Navbar from "react-bootstrap/cjs/Navbar";

const Sidebar = () => {
    return (
            <>
                <SidebarWrapper>

                    <ul className={"nav sidebar-links flex-column"}>
                        <li className={"nav-item"}>
                            <NavLink to="/admin/dashboard" className={"sidebar-link"} activeClassName="activeRouteSidebar">Dashboard</NavLink>
                        </li>
                        <li className={"nav-item"}>
                            <NavLink to="/admin/games" className={"sidebar-link"} activeClassName="activeRouteSidebar">Games</NavLink>
                        </li>
                        <li className={"nav-item"}>
                            <NavLink to="/admin/characters" className={"sidebar-link"} activeClassName="activeRouteSidebar">GameCharacters</NavLink>
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
                            <NavLink to="/admin/logout" className={"sidebar-link"} activeClassName="activeRouteSidebar">Log out</NavLink>
                        </li>
                        <li className={"nav-item"}>
                            <NavLink to="/" className={"sidebar-link"} activeClassName="activeRouteSidebar">Back</NavLink>
                        </li>
                    </ul>
                    {/*
                                        <ul>
                        <li><Link activeClassName="activeRoute" activeStyle={{color: '#0070D1'}} to={"/admin"}>Dashboard</Link></li>
                        <li><Link activeClassName="activeRoute" activeStyle={{color: '#0070D1'}} to={"/admin/users"}>Users</Link></li>
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