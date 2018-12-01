import React from 'react';
import './Form.css';

const Form = () => {

    return (
        <div id="form">
            <div className="firstPart">
                <h2>Оформить заявку</h2>
                <p className="forms-p-tag">Оставьте свои данные и наш менеджер свяжется с Вами в ближайшее время.</p>
            <form id="form1" action="">
                <p>Имя и фамилия</p>
                <input className="twoForm" type="text" placeholder="Имя и Фамилия" name="NameAndSurname" required/>
                <p>Ваш телефон</p> 
                <input className="twoForm" type="tel" placeholder="+7 (777) 792-848-24" name="PhoneNum" required/>
                <p>Комментарий</p>
                <textarea className="comments" name="comments" id="form1" cols="50" rows="4" placeholder="Оставьте комментарий..."></textarea>
                <input className="submitButton" type="submit" value="Отправить" />
            </form>
            <p>Нажимая кнопку "Отправить" Вы даете согласие на обработку своих персональных данных</p>
            </div>
        </div>
    )
}

export default Form;