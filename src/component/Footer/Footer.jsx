import React from 'react';
import './Footer.css'
import tg from './telegram.png'
import viber from './viber.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footerInfo">
                <p>Информаци о сайте:</p>
                <p>Сайт разработан для помощи в решении ваших ежедневных задач!</p>
            </div>

            <p>Для связи с разработчиком:</p>
            <div className="footerContact">
                <a href='tel:+375445810082'> +375(44)5810082 - A1</a>
                <a href='https://t.me/olegkostyuchenko'><img src={tg} alt="telegram" /></a>
                <a href='viber://chat?number=+375445810082'><img src={viber} alt="telegram" /></a>
            </div>
        </div>
    );
};

export default Footer;