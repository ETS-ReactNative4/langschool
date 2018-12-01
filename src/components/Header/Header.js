import React from 'react';
import './Header.css';
import image from './img/whitelogo.png';

const Header = () => {

    return (
        <div id="header">
            <div className="firstComponent">
                <a href="#"><img src={image} alt=""/></a>
            </div>
            <div className="secondComponent">
                <ul>
                    <li><a href="#">Главная</a></li>
                    <li><a href="#seasonsDiv">Сезоны</a></li>
                    <li><a href="#gallery">Галерея</a></li>
                    <li><a href="#about">О нас</a></li>
                </ul>
            </div>
            <div className="thirdComponent">
                <p>+7 (777) 156-76-35</p>
                <button className="applyButton"><a href="#form">Оформить заявку</a></button>
            </div>
        </div>
    )
}

export default Header;