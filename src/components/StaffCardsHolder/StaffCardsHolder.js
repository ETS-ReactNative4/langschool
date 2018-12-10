import React from 'react';
import './StaffCardsHolder.css';
import StaffCard from '../StaffCard/StaffCard';
import workern1 from './img/workerN1.jpg';
import workern2 from './img/workerN2.jpg';
import workern3 from './img/workerN3.jpg';
import workern4 from './img/workerN4.jpg';

const StaffCardsHolder = () => {

    return (
        <div id="staffCardsHolder">
            <div className="staffCardsCollection">
                <StaffCard image={workern1} name='Куттыбаева Осергуль' position={<p>Тим лидер, преподаватель<br/> актерского мастерства</p>}/>
                <StaffCard image={workern2} name='Тюребекова Лязат' position='Преподаватель английского языка'/>
                <StaffCard image={workern3} name='Safwan Abade' position='Носитель языка'/>
                <StaffCard image={workern4} name='Иманбаева Ботакоз' position='Преподаватель английского языка' />
            </div>
        </div>
    )
}

export default StaffCardsHolder;