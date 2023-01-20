import React, { useState } from "react";
import {
    FaTh,
    FaUserAlt,
    FaRegChartBar,
    FaPencilAlt,
    FaBars,
} from 'react-icons/fa';
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
    const [open, setOpen] = useState(true);
    const toggle = () => setOpen(!open);
    const menuUsers = [
        {
            path: '/',
            name: 'Home',
            icon: <FaTh />
        },
        {
            path: '/informations',
            name: 'Informations',
            icon: <FaRegChartBar

            />
        },
        {
            path: '/adduser',
            name: 'Adduser',
            icon: <FaUserAlt />
        },
        {
            path: '/editusers',
            name: 'Edituser',
            icon: <FaPencilAlt />
        }
    ]
    return (
        <div className="container">
            <div style={{ width: open ? '200px' : '50px' }} className="sidebar">
                <div className="top_section">
                    <h1 style={{ display: open ? "block" : "none" }} className="logo">logo</h1>
                    <div style={{ marginLeft: open ? "50px" : "0px" }} className="bar">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {/* {
                    menuUsers.map((user,index)=>(
                        <NavLink to={user.path} key={index} className='link' >
                            <div className="icon">{user.icon}</div>
                            <div style={{display: open?"block":"none"}} className="link_text">{user.name}</div>
                        </NavLink>
                    ))
                } */}
                <NavLink to="/" className='link' >
                    <div className="icon"><FaTh /></div>
                    <div style={{ display: open ? "block" : "none" }} className="link_text">Home</div>
                </NavLink>

                <NavLink to="/adduser" className='link' >
                    <div className="icon"><FaUserAlt /></div>
                    <div style={{ display: open ? "block" : "none" }} className="link_text">Add User</div>
                </NavLink> 

                 <NavLink to="/informations" className='link' >
                    <div className="icon"><FaUserAlt /></div>
                    <div style={{ display: open ? "block" : "none" }} className="link_text">Users</div>
                </NavLink>

                <NavLink to="/edituser" className='link' >
                    <div className="icon"><FaUserAlt /></div>
                    <div style={{ display: open ? "block" : "none" }} className="link_text">Edituser</div>
                </NavLink>
            </div>
            <main>{children}</main>
        </div>
    )
};
export default Sidebar;