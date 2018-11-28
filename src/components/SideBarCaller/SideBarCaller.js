import React from 'react';
import './SideBarCaller.css';

const showSideBar = () => {
    document.getElementById('sideBarCaller').style.visibility = 'hidden';
    document.getElementById('sideBar').style.visibility = 'visible';
}

const SideBarCaller = () => {

    return (
        <div id="sideBarCaller" onClick={showSideBar}>
            <div className="menuIcon"></div>
        </div>
    )
}

export default SideBarCaller;