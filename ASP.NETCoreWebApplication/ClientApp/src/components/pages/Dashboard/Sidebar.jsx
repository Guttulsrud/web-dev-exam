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
        handleLogin("", false)
    }

    return (
            <>
                <SidebarWrapper>
                    <ul className={"nav sidebar-links flex-column"}>
                        <li className={"nav-item"}>
                            <NavLink exact to="/admin" className={"sidebar-link"} activeClassName="activeRouteSidebar">Dashboard</NavLink>
                        </li>
                        <li className={"nav-item"}>
                            <NavLink exact to="/admin/games" className={"sidebar-link"} activeClassName="activeRouteSidebar">Games</NavLink>
                        </li>
                        <li className={"nav-item"}>
                            <NavLink exact to="/admin/gamecharacters" className={"sidebar-link"} activeClassName="activeRouteSidebar">Game Characters</NavLink>
                        </li>
                        <li className={"nav-item"}>
                            <NavLink exact to="/admin/accessories" className={"sidebar-link"} activeClassName="activeRouteSidebar">Accessories</NavLink>
                        </li>
                        <li className={"nav-item"}>
                            <NavLink exact to="/admin/users" className={"sidebar-link"} activeClassName="activeRouteSidebar">Users</NavLink>
                        </li>
                        <li className={"nav-item"}>
                            <NavLink exact to={"/"} onClick={handleLogout} className={"sidebar-link"} activeClassName="activeRouteSidebar">Log out</NavLink>
                        </li>
                        <li className={"nav-item"}>
                            <NavLink exact to="/" className={"sidebar-link"} activeClassName="activeRouteSidebar">Back</NavLink>
                        </li>
                    </ul>

                </SidebarWrapper>
            </>
    )
}
export default Sidebar;