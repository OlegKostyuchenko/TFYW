import React from 'react';
import './Header.css'
const Header = (props) => {
    return (
        <div className='header'>
            <div>
                <h1>LOGO</h1>
            </div>
            <div className='headerLink'>

                <div className='tasks'>
                    <p>Задачи</p>
                    <div className="tasks-link">
                        <a href=''>На сегодня</a>
                        <div className='line'></div>
                        <a href=''>Глобальные</a>
                    </div>
                </div>
                <a href='' className='contact'>Контакты</a>
                <a href='' className='profile'>Профиль</a>
                <button type='button'>log in</button>
            </div>
        </div>
    );
};

export default Header;