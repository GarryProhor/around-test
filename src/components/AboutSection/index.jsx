import React from 'react';
import aboutImg from "../../assets/images/pexels-scott-webb-212942.jpg";
import './About.css';

const AboutSection = () => {
    return (
        <section className="about" id="about">
            <div className="container">

                <figure className="about-banner">
                    <img src={aboutImg} alt="About us"/>


                </figure>

                <div className="about-content">

                    <p className="section-subtitle">О Нас</p>

                    <h2 className="h2 section-title">КРАСОТА ВОКРУГ</h2>

                    <p className="about-text">
                        Что же такое ландшафтный дизайн?
                    </p>


                    <ul className="about-list">

                        <li className="about-item">
                            <div className="about-item-icon">
                                <i className="ri-plant-line"></i>
                            </div>

                            <p className="about-item-text">Умный дизайн сада</p>
                        </li>

                        <li className="about-item">
                            <div className="about-item-icon">
                                <i className="ri-hand-heart-line"></i>
                            </div>

                            <p className="about-item-text">Красивая сцена вокруг</p>
                        </li>

                        <li className="about-item">
                            <div className="about-item-icon">
                                <i className="ri-mental-health-line"></i>
                            </div>

                            <p className="about-item-text">Исключительный образ жизни</p>
                        </li>

                        <li className="about-item">
                            <div className="about-item-icon">
                                <i className="ri-hearts-line"></i>
                            </div>

                            <p className="about-item-text">Постоянная поддержака</p>
                        </li>

                    </ul>

                    <p className="callout">
                        "Ландша́фтный дизайн, ландшафтная архитектура — искусство, находящееся на стыке трёх
                        направлений: с одной стороны, архитектуры, строительства и проектирования (инженерный
                        аспект), с другой стороны, ботаники и растениеводства (биологический аспект) и, с
                        третьей стороны, в ландшафтном дизайне используются сведения из истории (особенно из
                        истории культуры) и философии."
                    </p>

                    <a href="#service" className="btn">Наши услуги</a>

                </div>

            </div>
        </section>
    );
};

export default AboutSection;
