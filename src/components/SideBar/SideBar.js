import React from 'react';
import './SideBar.css';

const HideSideBar = () =>{
    const sideBar = document.getElementById('sideBar').style.visibility = 'hidden';
    document.getElementById('sideBarCaller').style.visibility = 'visible';
}

const SideBar = () => {

    return (
        <div id="sideBar">
            <div className="closeSideBar">
                <div className="closeIcon" onClick={HideSideBar}></div>
            </div>
            <div id="sideBarLogoWrapper">
                <img src="" alt="logo"/>
            </div>
            <div id="sideBarMenuWrapper">
                <ul>
                    <li><a href="">Главная</a></li>
                    <li><a href="">Смены</a></li>
                    <li><a href="">О нас</a></li>
                    <li><a href="">Отзывы</a></li>
                    <li><a href="">Контакты</a></li>
                    <li><a href="">Оформить заявку</a></li>
                </ul>
            </div>
            <div className="sideBarButtonsWrapper">
                <div className="sideBarButtons">
                    <div className="socialNetworkWrapper">
                        <div className="facebookIcon"> <a href="" target="_blank"> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xmlSpace="preserve"> <path d="M47.761,24c0,13.121-10.638,23.76-23.758,23.76C10.877,47.76,0.239,37.121,0.239,24c0-13.124,10.638-23.76,23.764-23.76 C37.123,0.24,47.761,10.876,47.761,24 M20.033,38.85H26.2V24.01h4.163l0.539-5.242H26.2v-3.083c0-1.156,0.769-1.427,1.308-1.427 h3.318V9.168L26.258,9.15c-5.072,0-6.225,3.796-6.225,6.224v3.394H17.1v5.242h2.933V38.85z"></path> </svg> </a> </div>
                        <div class="instagramIcon"> <a href="" target="_blank"> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30px" height="30px" viewBox="-455 257 48 48" enable-background="new -455 257 48 48" xmlSpace="preserve"> <path d="M-430.938,256.987c13.227,0,23.95,10.723,23.95,23.95c0,13.227-10.723,23.95-23.95,23.95 c-13.227,0-23.95-10.723-23.95-23.95C-454.888,267.71-444.165,256.987-430.938,256.987z M-421.407,268.713h-19.06 c-1.484,0-2.688,1.204-2.688,2.69v19.07c0,1.485,1.203,2.689,2.688,2.689h19.06c1.484,0,2.688-1.204,2.688-2.689v-19.07 C-418.72,269.917-419.923,268.713-421.407,268.713z M-430.951,276.243c2.584,0,4.678,2.096,4.678,4.681 c0,2.585-2.095,4.68-4.678,4.68c-2.584,0-4.678-2.096-4.678-4.68C-435.629,278.339-433.535,276.243-430.951,276.243z M-421.579,289.324c0,0.54-0.437,0.978-0.977,0.978h-16.779c-0.54,0-0.977-0.438-0.977-0.978V279.08h2.123 c-0.147,0.586-0.226,1.199-0.226,1.831c0,4.144,3.358,7.504,7.5,7.504c4.142,0,7.5-3.359,7.5-7.504c0-0.632-0.079-1.245-0.226-1.831 h2.061V289.324L-421.579,289.324z M-421.516,275.23c0,0.54-0.438,0.978-0.977,0.978h-2.775c-0.54,0-0.977-0.438-0.977-0.978v-2.777 c0-0.54,0.438-0.978,0.977-0.978h2.775c0.54,0,0.977,0.438,0.977,0.978V275.23z"></path> </svg> </a> </div>
                    </div>
                    <a class="btn yellow-btn" href="#">Оформить заявку</a>
                </div>
            </div>
        </div>
    )
}

export default SideBar;