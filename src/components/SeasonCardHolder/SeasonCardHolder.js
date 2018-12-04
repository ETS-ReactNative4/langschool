import React from 'react';
import './SeasonCardHolder.css';
import SeasonsCard from '../SeasonsCard/SeasonsCard';

const SeasonCardHolder = () => {

    return (
        <div id="seasonCardHolder"> 
            <div className="seasonCardCollection">
                <SeasonsCard image='https://static.tildacdn.com/tild3634-6135-4965-a162-656634323636/WINTER_INSTA.jpg' name='Зимняя смена 15-18 декабря 2018' description='Английский лагерь в Боровом для детей от 7 до 16 лет'/>
                <SeasonsCard image='https://static.tildacdn.com/tild3634-6135-4965-a162-656634323636/WINTER_INSTA.jpg' name='Зимняя смена 2-8 января 2019' description='Английский лагерь в Боровом для детей от 7 до 16 лет'/>
                <SeasonsCard image='https://static.tildacdn.com/tild3634-6135-4965-a162-656634323636/WINTER_INSTA.jpg' name='Зимняя смена 3-7 января 2019' description='Английский лагерь в Астане для детей от 5 до 12 лет'/>
            </div>
        </div>
    )
}

export default SeasonCardHolder;