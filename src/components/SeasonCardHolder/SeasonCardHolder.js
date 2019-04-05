import React from 'react';
import './SeasonCardHolder.css';
import SeasonsCard from '../SeasonsCard/SeasonsCard';

const SeasonCardHolder = ({ seasonCardsCollection }) => {

    const seasonCardArray = seasonCardsCollection.map((seasonCard, i) => <SeasonsCard key={i} image={seasonCard.image} name={seasonCard.name} description={seasonCard.description}/>)

    return (
        <div id="seasonCardHolder"> 
            <div className="seasonCardCollection">
                { seasonCardArray }          
            </div>
        </div>
    )
}

export default SeasonCardHolder;