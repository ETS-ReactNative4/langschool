import React from 'react';
import './Header.css';

const Header = () => {

    return (
        <div id="header">
            <div className="firstComponent">
                <p>First</p>
            </div>
            <div className="secondComponent">
                <a href="">Главная</a>
                <a href="">Стафф</a>
                <a href="">Галерея</a>
                <a href="">Контакты</a>
            </div>
            <div className="thirdComponent">
                <p>848848484</p>
                <button className="applyButton">Оформить заявку</button>
            </div>
        </div>
    )
}

export default Header;