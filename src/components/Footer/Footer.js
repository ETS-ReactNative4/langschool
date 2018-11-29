import React from 'react';
import './Footer.css';
import image from './img/logo.jpg';

const Footer = () => {

    return (
        <div id="footer">
            <div className="firstCol">
                <img src={image} alt="Logo"/>
                <a href="">Политика конфиденциальности</a>
                <p>&#169;2018 LangSchool</p>
            </div>
            <div className="secondCol">
                <a href="">Лагерь с изучением английского языка</a>
                <a href="">Главная</a>
                <a href="">О нас</a>
                <a href="">Виды лагеря</a>
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
                <a href="">Facebook</a>
                <a href="" className="instagram"></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;