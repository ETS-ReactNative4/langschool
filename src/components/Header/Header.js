import React from 'react';
import './Header.css';

const Header = () => {

    return (
        <div id="header">
            <div className="firstComponent">
                <p>First</p>
            </div>
            <div className="secondComponent">
                <ul>
                    <li><a href="">Главная</a></li>
                    <li><a href="">Стафф</a></li>
                    <li><a href="">Галерея</a></li>
                    <li><a href="">Контакты</a></li>
                </ul>
            </div>
            <div className="thirdComponent">
                <p>+7 (777) 156-76-35</p>
                <button className="applyButton">Оформить заявку</button>
            </div>
        </div>
    )
}

export default Header;