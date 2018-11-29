import React from 'react';
import './SideBarCaller.css';

const showSideBar = () => {
    document.getElementById('sideBarCaller').style.visibility = 'hidden';
    document.getElementById('sideBar').style.visibility = 'visible';

    const el = document.createElement('div');
    el.id = "tempSideBarBlack";
    el.style = "position: fixed;height: 100vh;width: 100vw;background-color: #000;top: 0;left: 0;opacity: .7; z-index: 5";
    
    document.getElementById('root').appendChild(el);
}

const SideBarCaller = () => {

    return (
        <div id="sideBarCaller" onClick={showSideBar}>
            <div className="menuIcon"></div>
        </div>
    )
}

export default SideBarCaller;