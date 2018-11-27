import React from 'react';
import './Footer.css';
import image from './img/logo.jpg';

const Footer = () => {

    return (
        <div id="footer">
            <div className="firstCol">
                <img src={image} alt="Logo"/>
                <a href="">Политика конфиденциальности</a>
                <p>LangSchool 2018</p>
            </div>
            <div className="secondCol">
                <h4>Лагерь с изучением английского языка</h4>
                <a href="">Главная</a>
                <a href="">О нас</a>
                <a href="">Виды лагеря</a>
            </div>
            <div className="thirdCol">
                <h4>Сезоны:</h4>
                <a href="">Зимний сезон</a>
                <a href="">Весенний сезон</a>
                <a href="">летний сезон</a>
            </div>
            <div className="fourthCol">
                <p>Содержимое данного сайта ни при каких условиях не является публичной офертой, определяемой положениями Статьи 437 (2) Гражданского кодекса Российской Федерации. </p>
            </div>
        </div>
    )
}

export default Footer;