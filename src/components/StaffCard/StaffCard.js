import React from 'react';
import './StaffCard.css';
import image from './img/woman.jpg';

const StaffCard = () => {

    return (
        <div id="staffCard">
                <img src={image} alt="worker n1"/>
                <h3>Not Asian at all</h3>
                <p>Руководитель проекта</p>
        </div>
    )
}

export default StaffCard;