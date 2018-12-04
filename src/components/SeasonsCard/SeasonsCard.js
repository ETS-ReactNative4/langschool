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
                <a href="#form"><button className="applicationButton">Оформить заявку</button></a>
            </div>
        </div>
    )
}

export default SeasonsCard;