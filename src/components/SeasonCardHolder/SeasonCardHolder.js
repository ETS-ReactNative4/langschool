import React from 'react';
import './SeasonCardHolder.css';
import SeasonsCard from '../SeasonsCard/SeasonsCard';
import image15 from './img/15-18(3).jpeg';
import image2 from './img/2-8(3).jpeg';
import image3 from './img/3-7(3).jpeg';

const SeasonCardHolder = () => {

    return (
        <div id="seasonCardHolder"> 
            <div className="seasonCardCollection">
                <SeasonsCard image={image15} name='Весенняя смена 21-30 марта' description='Английский лагерь в Боровом для детей от 10 до 16 лет'/>
                <SeasonsCard image={image3} name='Весенняя смена 25-29 марта' description='Английский лагерь в Астане для детей от 5 до 12 лет'/>
                <SeasonsCard image={image2} name='Зимняя смена 16-17 февраля' description='Английский лагерь в Боровом для детей от 7 до 16 лет'/>
            </div>
        </div>
    )
}

export default SeasonCardHolder;