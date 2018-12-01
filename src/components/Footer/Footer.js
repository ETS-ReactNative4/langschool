import React from 'react';
import './Footer.css';
import image from './img/whitelogo.png';

const Footer = () => {

    return (
        <div id="footer">
            <div className="firstCol">
                <a href="#"><img src={image} alt="Logo"/></a>
                <a href="">Политика конфиденциальности</a>
                <p>&#169;2018 LingvoDom</p>
            </div>
            <div className="secondCol">
                <a href="#">Лагерь с изучением английского языка</a>
                <a href="#">Главная</a>
                <a href="#about">О нас</a>
                <a href="#seasonsDiv">Виды лагеря</a>
            </div>
            <div className="thirdCol">
                <a>Сезоны:</a>
                <a href="">Зимний сезон</a>
                <a href="">Весенний сезон</a>
                <a href="">Летний сезон</a>
            </div>
            <div className="fourthCol">
                <div className="fourthCol1">
                <p>Контакты:</p>
                <p>+7(775) 156-76-35</p>
                </div>
                <div className="fourthCol2">
                <a href="https://facebook.com/" target="_blank">Facebook</a>
                <a href="https://www.instagram.com/" target="_blank" className="instagram"></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;