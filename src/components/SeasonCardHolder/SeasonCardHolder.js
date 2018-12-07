import React from 'react';
import './SeasonCardHolder.css';
import SeasonsCard from '../SeasonsCard/SeasonsCard';
import image15 from './img/15-18(3).jpg';
import image2 from './img/2-8(3).jpg';
import image3 from './img/3-7(3).jpg';

const SeasonCardHolder = () => {

    return (
        <div id="seasonCardHolder"> 
            <div className="seasonCardCollection">
                <SeasonsCard image={image15} name='Зимняя смена 15-18 декабря 2018' description='Английский лагерь в Боровом для детей от 7 до 16 лет'/>
                <SeasonsCard image={image3} name='Зимняя смена 3-7 января 2019' description='Английский лагерь в Астане для детей от 5 до 12 лет'/>
                <SeasonsCard image={image2} name='Зимняя смена 2-8 января 2019' description='Английский лагерь в Боровом для детей от 7 до 16 лет'/>
            </div>
        </div>
    )
}

export default SeasonCardHolder;