import React from 'react';
import mainImg from "../../assets/images/pexels-xu-1633339.jpg";
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero " id="home">
            <div className="container">
                <div className="hero-content">
                    <p className="hero-subtitle">
                        <i className="ri-home-heart-line"></i>
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
    );
};

export default Hero;
