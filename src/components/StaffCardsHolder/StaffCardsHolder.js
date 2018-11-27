import React from 'react';
import './StaffCardsHolder.css';
import StaffCard from '../StaffCard/StaffCard';

const StaffCardsHolder = () => {

    return (
        <div id="staffCardsHolder">
            <div className="staffCardsCollection">
                <StaffCard />
                <StaffCard />
                <StaffCard />
                <StaffCard />
            </div>
        </div>
    )
}

export default StaffCardsHolder;