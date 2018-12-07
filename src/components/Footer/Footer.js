import React from 'react';
import './Footer.css';
import image from './img/kidslogo.png';

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
                <a>Смены:</a>
                <a href="">Зимняя смена</a>
                <a href="">Весенняя смена</a>
                <a href="">Летняя смена</a>
            </div>
            <div className="fourthCol">
                <div className="fourthCol1">
                <p>Контакты:</p>
                <p>+7 (778) 439-91-62</p>
                </div>
                <div className="fourthCol2">
                <a href="https://www.facebook.com/lingvodomkz/?ref=bookmarks" target="_blank">Facebook</a>
                <a href="https://www.instagram.com/lingvodom_astana/" target="_blank" className="instagram"></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;