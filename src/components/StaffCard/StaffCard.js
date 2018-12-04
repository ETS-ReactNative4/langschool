import React from 'react';
import './StaffCard.css';

const StaffCard = ({ image, name, position }) => {

    return (
        <div className="staffCard">
                <img src={image} alt="worker n1"/>
                <h3>{name}</h3>
                <p>{position}</p>
        </div>
    )
}

export default StaffCard;