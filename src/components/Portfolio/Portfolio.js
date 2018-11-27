import React from 'react';
import './Portfolio.css';
import eye from './img/eye.png';

const Portfolio = () => {
    return (
        <div id="portfolio">
            <div className="portfolioContent">
                <div className="gray"><img src={eye} alt="eye"/></div>
                <div className="whitegray"><img src={eye} alt="eye"/></div>
                <div className="gray"><img src={eye} alt="eye"/></div>
                <div className="whitegray"><img src={eye} alt="eye"/></div>
                <div className="whitegray"><img src={eye} alt="eye"/></div>
                <div className="gray"><img src={eye} alt="eye"/></div>
                <div className="whitegray"><img src={eye} alt="eye"/></div>
                <div className="gray"><img src={eye} alt="eye"/></div>
                <div id="loadMoreWork"><p>Показать все</p></div>
            </div>
        </div>
    )
}

export default Portfolio;