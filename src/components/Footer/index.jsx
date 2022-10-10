import React from 'react';
import logo from "../../assets/images/Around.png";
import './Footer.css';
import {Link} from "react-router-dom";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="footer">

            <div className="footer-top">
                <div className="container">

                    <div className='footer-wrapper'>
                        <div className="footer-brand">

                            <Link href="#" className="logo">
                                <img src={logo} alt="Around logo" />
                            </Link>

                            <p className="section-text">
                                Мы знаем, что Ваш Мир вращается ВОКРУГ ВАС!
                            </p>

                            <ul className="contact-list">
                                <li>
                                    <Link href="#" className="contact-link">
                                        <i className="ri-map-pin-line"></i>
                                        <span>Минск, Беларусь</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="tel:+375445682838" className="contact-link">
                                        <i className="ri-phone-line"></i>
                                        <span>+375445682838</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="mailto:contact@homeverse.com" className="contact-link">
                                        <i className="ri-mail-line"></i>
                                        <span>contact@around.by</span>
                                    </Link>
                                </li>
                            </ul>

                            <ul className="social-list">
                                <li>
                                    <Link href="#" className="social-link">
                                        <ion-icon name="logo-facebook"></ion-icon>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="#" className="social-link">
                                        <ion-icon name="logo-twitter"></ion-icon>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="#" className="social-link">
                                        <ion-icon name="logo-linkedin"></ion-icon>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="#" className="social-link">
                                        <ion-icon name="logo-youtube"></ion-icon>
                                    </Link>
                                </li>

                            </ul>

                        </div>

                        <div className="footer-link-box">

                            <ul className="footer-list">

                                <li>
                                    <p className="footer-list-title">Компания</p>
                                </li>

                                <li>
                                    <Link href="#" className="footer-link">О нас</Link>
                                </li>

                                <li>
                                    <Link href="#" className="footer-link">Блог</Link>
                                </li>

                                <li>
                                    <Link href="#" className="footer-link">Все проекты</Link>
                                </li>

                                <li>
                                    <Link href="#" className="footer-link">Мы на карте</Link>
                                </li>

                                <li>
                                    <Link href="#" className="footer-link">Вопросы/ответы</Link>
                                </li>

                                <li>
                                    <Link href="#" className="footer-link">Наши контакты</Link>
                                </li>

                            </ul>

                            <ul className="footer-list">

                                <li>
                                    <p className="footer-list-title">Услуги</p>
                                </li>

                                <li>
                                    <Link href="#" className="footer-link">Проектирование</Link>
                                </li>

                                <li>
                                    <Link href="#" className="footer-link">Ландшафтные работы</Link>
                                </li>

                                <li>
                                    <Link href="#" className="footer-link">Озеленение</Link>
                                </li>

                                <li>
                                    <Link href="#" className="footer-link">Консультации</Link>
                                </li>


                            </ul>

                            <ul className="footer-list">

                                <li>
                                    <p className="footer-list-title">Услуги</p>
                                </li>

                                <li>
                                    <Link href="#" className="footer-link">Проектирование</Link>
                                </li>

                                <li>
                                    <Link href="#" className="footer-link">Ландшафтные работы</Link>
                                </li>

                                <li>
                                    <Link href="#" className="footer-link">Озеленение</Link>
                                </li>

                                <li>
                                    <Link href="#" className="footer-link">Консультации</Link>
                                </li>


                            </ul>

                        </div>
                    </div>

                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p className="copyright">
                        &copy; {year} <Link href="#">Garry Prohor</Link>. All Rights Reserved
                    </p>

                </div>
            </div>

        </footer>
    );
};

export default Footer;
