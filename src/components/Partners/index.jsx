import React from 'react';
import Slider from "react-slick";
import './Partners.css';
import ava01 from '../../assets/images/brand/01.jpg'
import ava02 from '../../assets/images/brand/02.png'
import ava03 from '../../assets/images/brand/03.png'
import ava04 from '../../assets/images/brand/04.png'
import ava05 from '../../assets/images/brand/05.jpg'


const Partners = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
        ],
    };
    return (
            <section className="partner" id="partner">
                <div className="container" id="partner">

                    <p className="section-subtitle">Бренды</p>

                    <h2 className="h2 section-title">Наши партнеры</h2>

                    <div >
                        <Slider {...settings} className="partner-list d-flex align-items-center justify-content-center">
                            <div className="partner-item">
                                    <img src={ava01} alt=""/>
                            </div>

                            <div className="partner-item">
                                    <img src={ava02} alt=""/>
                            </div>

                            <div className="partner-item">
                                    <img src={ava03} alt=""/>
                            </div>

                            <div className="partner-item">
                                    <img src={ava04} alt=""/>
                            </div>

                            <div className="partner-item">
                                    <img src={ava05} alt=""/>
                            </div>
                        </Slider>
                    </div>

                </div>
            </section>

    );
};

export default Partners;
