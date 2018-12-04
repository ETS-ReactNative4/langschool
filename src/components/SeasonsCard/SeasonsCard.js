import React from 'react';
import './SeasonsCard.css';

const SeasonsCard = ({ image, name, description }) => {

    return (
        <div className="seasonCard">
            <img src={image} alt="Winter Season"/>
            <div className="cardText">
                <p>{name}</p>
                <p>{description}</p>
            </div>
            <div className="heiwid">
                <button className="applicationButton"><a href="#form">Оформить заявку</a></button>
            </div>
        </div>
    )
}

export default SeasonsCard;