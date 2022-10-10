import React from 'react';
import mainImg from '../../assets/images/аллея.jpg';
import aboutImg from '../../assets/images/pexels-scott-webb-212942.jpg'
import img1 from '../../assets/images/1.jpg';
import img2 from '../../assets/images/2.jpg';
import img3 from '../../assets/images/3.jpg';

const Home = () => {
    return (
        <main>
            <article>
                <section className="hero " id="home">
                    <div className="container">

                        <div className="hero-content">

                            <p className="hero-subtitle">
                                <ion-icon name="home"></ion-icon>

                                <span>ИССЛЕДУЙТЕ КРАСОТУ ПРИРОДЫ</span>
                            </p>

                            <h2 className="h1 hero-title">AROUND</h2>

                            <p className="hero-text">
                                Мы знаем, что Ваш Мир вращается ВОКРУГ ВАС!
                                И верим, что «Бытие определяет Сознание»!
                                Поэтому предлагаем создать уникальное ПРОСТРАНСТВО ВОКРУГ!

                            </p>


                        </div>

                        <figure className="hero-banner">
                            <img src={mainImg} alt="Modern house model" className="w-100"/>
                        </figure>

                    </div>
                </section>




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
                                        <ion-icon name="home-outline"></ion-icon>
                                    </div>

                                    <p className="about-item-text">Умный дизайн сада</p>
                                </li>

                                <li className="about-item">
                                    <div className="about-item-icon">
                                        <ion-icon name="leaf-outline"></ion-icon>
                                    </div>

                                    <p className="about-item-text">Красивая сцена вокруг</p>
                                </li>

                                <li className="about-item">
                                    <div className="about-item-icon">
                                        <ion-icon name="wine-outline"></ion-icon>
                                    </div>

                                    <p className="about-item-text">Исключительный образ жизни</p>
                                </li>

                                <li className="about-item">
                                    <div className="about-item-icon">
                                        <ion-icon name="shield-checkmark-outline"></ion-icon>
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




                <section className="service" id="service">
                    <div className="container">

                        <p className="section-subtitle">Наши услуги</p>

                        <h2 className="h2 section-title">Наш основной фокус</h2>

                        <ul className="service-list">

                            <li>
                                <div className="service-card">

                                    <div className="card-icon">
                                        <img src={img1} alt="Service icon"/>
                                    </div>

                                    <h3 className="h3 card-title">
                                        <a href="#">Частные сады</a>
                                    </h3>

                                    <p className="card-text">
                                        Мы проектируем большие и малые сады.
                                        Умеем создавать личные, соответствующие индивидуальным запросам, пространства.

                                    </p>
                                </div>
                            </li>

                            <li>
                                <div className="service-card">

                                    <div className="card-icon">
                                        <img src={img2} alt="Service icon"/>
                                    </div>

                                    <h3 className="h3 card-title">
                                        <a href="#">Городское озеленение</a>
                                    </h3>

                                    <p className="card-text">
                                        Мы выступаем за комфортное существование в городской среде.
                                        Проектируем озеленение террас, дворов.
                                    </p>
                                </div>
                            </li>

                            <li>
                                <div className="service-card">

                                    <div className="card-icon">
                                        <img src={img3} alt="Service icon"/>
                                    </div>

                                    <h3 className="h3 card-title">
                                        <a href="#">Фитодекор</a>
                                    </h3>

                                    <p className="card-text">
                                        Мы успешно работаем с озеленением офисов и жилых пространств.
                                        Мы знаем, как создать уют и произвести впечатление.
                                    </p>
                                </div>
                            </li>

                        </ul>

                    </div>
                </section>




                <section className="cta">
                    <div className="container">

                        <div className="cta-card">
                            <div className="card-content">
                                <h2 className="h2 card-title">Мечтаете о саде мечты?</h2>

                                <p className="card-text">Мы поможем вам реализовать вашу мечту</p>
                            </div>

                            <button className="btn cta-btn">
                                <span>Исследуйте свойства</span>

                                <ion-icon name="arrow-forward-outline"></ion-icon>
                            </button>
                        </div>

                    </div>
                </section>

            </article>
        </main>
    );
};

export default Home;
