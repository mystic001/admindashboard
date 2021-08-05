import React from 'react'
import './sidebar.css'
import { TrendingUp, HomeWork, People, Receipt, Report, MailOutline, Feedback, Message, Timer } from '@material-ui/icons';
import { Link } from "react-router-dom";
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarmenu">
                    <h3 className="sidebar-title">Dashboards</h3>
                    <ul className="sidebarList">
                        <li className="sideBarIcon">
                            <HomeWork />
                            <Link to="/" className="remlin"><h4>Home</h4></Link>
                        </li>
                        <li className="sideBarIcon"><TrendingUp /> <h4>Analytics</h4></li>
                        <li className="sideBarIcon"><Timer /> <h4>Sales</h4> </li>
                    </ul>
                </div>

                <div className="sidebarmenu">
                    <h3>Quick Menu</h3>
                    <ul className="sidebarList">

                        <li className="sideBarIcon"><People />
                            <Link to="/Users" className="remlin"><h4>Users</h4></Link>
                        </li>
                        <li className="sideBarIcon"><TrendingUp /> <h4>Products</h4></li>
                        <li className="sideBarIcon"><Receipt /> <h4>Transactions</h4></li>
                        <li className="sideBarIcon"><Report /> <h4>Report</h4> </li>
                    </ul>
                </div>

                <div className="sidebarmenu">
                    <h3>Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sideBarIcon"><MailOutline /> <h4>Mail</h4></li>
                        <li className="sideBarIcon"><Feedback /> <h4>Feedbacks</h4></li>
                        <li className="sideBarIcon"><Message /> <h4>Messages</h4> </li>
                    </ul>
                </div>


                <div className="sidebarmenu">
                    <h3>Staff</h3>
                    <ul className="sidebarList">
                        <li className="sideBarIcon"><HomeWork /> <h4>Manage</h4></li>
                        <li className="sideBarIcon"><TrendingUp /> <h4>Analytics</h4></li>
                        <li className="sideBarIcon"><TrendingUp /> <h4>Reports</h4> </li>
                    </ul>
                </div>


            </div>


        </div>
    )
}

export default Sidebar
