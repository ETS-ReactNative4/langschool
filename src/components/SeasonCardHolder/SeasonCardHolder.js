import React from 'react';
import './SeasonCardHolder.css';
import SeasonsCard from '../SeasonsCard/SeasonsCard';

const SeasonCardHolder = () => {

    return (
        <div id="seasonCardHolder"> 
            <div className="seasonCardCollection">
                <SeasonsCard />
                <SeasonsCard />
                <SeasonsCard />
            </div>
        </div>
    )
}

export default SeasonCardHolder;