import React from 'react';
import './Banner.css';
import Header from '../Header/Header';

const Banner = () => {

    return (
        <div id="banner">
            <Header />
            <div className="bannerContent">

            </div>
            <div className="arrow">
                <div className="arrowDown"></div>
            </div>
        </div>
    )
}

export default Banner;