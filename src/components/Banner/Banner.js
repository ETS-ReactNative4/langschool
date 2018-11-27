import React from 'react';
import './Banner.css';
import Header from '../Header/Header';

const Banner = () => {

    return (
        <div id="banner">
            <Header />
            <div className="bannerContent">
                <div id="bannerInfo">
                    <p>Английский Лагерь в Подмосковье</p>
                    <p>Тренинги по английскому языку, творческие проекты, мастер-классы и многое другое!</p>
                    <div className="bannerBtnWrapper">
                        <a className="btn yellow-btn" href="#">Ближайшие смены</a>
                        <a className="btn transparent-btn" href="#">Оформить заявку</a>
                    </div>
                </div>
            </div>
            <div className="arrow">
                <div className="arrowDown"></div>
            </div>
        </div>
    )
}

export default Banner;