import React from 'react';
import './ServiceSection.css';
import {serviceItem} from "../../assets/data/serviceItem";
import {Link} from "react-router-dom";

const ServiceSection = () => {
    return (
        <section className="service" id="service">
            <div className="container">

                <p className="section-subtitle">Наши услуги</p>

                <h2 className="h2 section-title">Наш основной фокус</h2>

                <ul className="service-list">
                    {
                        serviceItem.map(({image, title, text}) => (
                            <li key={title}>
                                <div className="service-card">
                                    <div className="card-icon">
                                        <img src={image} alt="Service icon"/>
                                    </div>
                                    <h3 className="h3 card-title">
                                        <Link to="#">{title}</Link>
                                    </h3>
                                    <p className="card-text">{text}</p>
                                </div>
                            </li>
                        ))
                    }
                </ul>

            </div>
        </section>
    );
};

export default ServiceSection;
