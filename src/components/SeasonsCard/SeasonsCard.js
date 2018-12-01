import React from 'react';
import './SeasonsCard.css';
import image from './img/winter.jpg';

const SeasonsCard = () => {

    return (
        <div className="seasonCard">
            <img src={image} alt="Winter Season"/>
            <div className="cardText">
                <p>Зимняя смена 2-8 января 2019</p>
                <p>Зимний английский лагерь в Подмосковье для детей от 7 до 17 лет</p>
            </div>
            <div className="heiwid">
                <button className="applicationButton"><a href="#form">Оформить заявку</a></button>
            </div>
        </div>
    )
}

export default SeasonsCard;