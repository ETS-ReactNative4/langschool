import React from 'react';
import './StaffCardsHolder.css';
import StaffCard from '../StaffCard/StaffCard';
import workern1 from './img/workerN1.jpg';
import workern2 from './img/workerN2.jpg';
import workern3 from './img/workerN3.jpg';

const StaffCardsHolder = () => {

    return (
        <div id="staffCardsHolder">
            <div className="staffCardsCollection">
                <StaffCard image={workern1} name='Акмаржан Дулатовна' position='Руководитель проекта'/>
                <StaffCard image={workern2} name='Гульнура Маратовна' position='Преподователь английского языка'/>
                <StaffCard image={workern3} name='Акмаржан Раисова' position='Вожатая'/>
                <StaffCard />
            </div>
        </div>
    )
}

export default StaffCardsHolder;