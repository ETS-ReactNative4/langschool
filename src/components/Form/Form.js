import React from 'react';
import './Form.css';

const handleSubmitButtonClick = () => {
    const statusDiv = document.getElementsByClassName('loaderDiv')[0];
    statusDiv.innerHTML = "";
    statusDiv.classList.add('loader');
    statusDiv.style = "visibility: visible; position: unset";
    fetch('http://localhost:3001/request', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: document.getElementById('NameAndSurname').value,
            phoneNumber: document.getElementById('PhoneNum').value,
            comment: document.getElementById('textarea').value,
        })
    })
    .then(res => res.json())
    .then(status => {
        if(status == "Success") {
            statusDiv.classList.remove('loader');
            statusDiv.style = 'color: green; font-weight: 600; align-self: center; margin-bottom: 15px;'
            statusDiv.innerHTML = "Спасибо за Вашу заявку!"
        } else {
            statusDiv.classList.remove('loader');
            statusDiv.style = 'color: red; font-weight: 600; align-self: center; margin-bottom: 15px;'
            statusDiv.innerHTML = "Ooops! Попробуйте позже!"
        }
    })
}

const Form = () => {

    return (
        <div id="form">
            <div className="firstPart">
                <h2>Оформить заявку</h2>
                <p className="forms-p-tag">Оставьте свои данные и наш менеджер свяжется с Вами в ближайшее время.</p>
            <div id="form1">
                <p>Имя и фамилия</p>
                <input className="twoForm" type="text" placeholder="Имя и Фамилия" name="NameAndSurname" id="NameAndSurname" required/>
                <p>Ваш телефон</p> 
                <input className="twoForm" type="tel" placeholder="+7 (777) 792-848-24" name="PhoneNum" id="PhoneNum" required/>
                <p>Комментарий</p>
                <textarea className="comments" name="comments" id="textarea" cols="50" rows="4" placeholder="Оставьте комментарий..."></textarea>
                <div className="loaderDiv"></div>
                <input onClick={handleSubmitButtonClick} className="submitButton" type="submit" value="Отправить" />
            </div>
            <p>Нажимая кнопку "Отправить" Вы даете согласие на обработку своих персональных данных</p>
            </div>
        </div>
    )
}

export default Form;