import React from 'react';
import './Banner.css';
import Header from '../Header/Header';

const Banner = () => {

    return (
        <div id="banner">
            <div className="blurbackground"></div>
            <Header />
            <div className="bannerContent">
                <div id="bannerInfo">
                    <p>Английский лагерь в Подмосковье</p>
                    <p>Тренинги по английскому языку, творческие проекты, мастер-классы и многое другое!</p>
                    <div className="bannerBtnWrapper">
                        <a className="btn yellow-btn" href="#seasonsDiv">Ближайшие смены</a>
                        <a className="btn transparent-btn" href="#form">Оформить заявку</a>
                    </div>
                </div>
            </div>
            <div className="arrow">
                <a href="#seasonsDiv"><div className="arrowDown arrowAnimation"></div></a> 
            </div>
        </div>
    )
}

export default Banner;