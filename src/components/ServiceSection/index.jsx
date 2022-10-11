import React from 'react';
import img1 from "../../assets/images/1.jpg";
import img2 from "../../assets/images/2.jpg";
import img3 from "../../assets/images/3.jpg";

const ServiceSection = () => {
    return (
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
    );
};

export default ServiceSection;
