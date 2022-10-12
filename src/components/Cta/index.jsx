import React from 'react';
import './Cta.css';

const Cta = () => {
    return (
        <section className="cta">
            <div className="container">

                <div className="cta-card">
                    <div className="card-content">
                        <h2 className="h2 card-title">Мечтаете о саде?</h2>

                        <p className="card-text">Мы поможем вам реализовать вашу мечту</p>
                    </div>

                    <button className="btn cta-btn">
                        <span>Исследуйте свойства</span>

                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Cta;
