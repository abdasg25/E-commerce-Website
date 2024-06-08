import React from "react";
import "./SideBarAccount.css";


const SideBarAccount = () => {
    return (
        <>
        <div className="account-side-bar">
            <h3 className="manage">Manage My Account</h3>

            <ul className="sidebar-account-menu">
                <li className="menu-item">My Profile</li>
                <li className="menu-item">Address Book</li>
                <li className="menu-item">My Payment Options</li>
                <li className="menu-item">My Orders</li>
            </ul>
            {/* <h3 className="manage">My Orders</h3>

            <ul className="sidebar-account-menu">
                <li className="menu-item">My Profile</li>
                <li className="menu-item">Address Book</li>
                <li className="menu-item">My Payment Options</li>
            </ul> */}
        </div>
        </>
    );
}
export default SideBarAccount;