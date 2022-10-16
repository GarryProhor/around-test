import React from 'react';
import './Service.css';
import CommonSection from "../../components/CommonSection";
import Helmet from "../../components/Helmet";
import {servicesList} from "../../assets/data/servicesList";

const Service = () => {
    return (
        <Helmet title='Услуги'>
            <CommonSection title='Услуги'/>

            <section className="service">
                <div className="content-lg container">
                    <div className="row">
                        {
                            servicesList.map(({id, title, price, image, service}) => (
                                <div key={id} className="service-content col-lg-4">
                                    <div className="price">
                                        <img src={image} alt={title}/>
                                        <div className="price-content">
                                            <span>Полный <br/> {price} руб/100м2</span>
                                        </div>
                                    </div>
                                    {
                                        service.map(({id, text}) =>(
                                            <div key={id} className="price-text">
                                                <p>{text}
                                                    <hr/>
                                                </p>
                                            </div>
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </div>

                </div>
            </section>
        </Helmet>
    );
};

export default Service;
