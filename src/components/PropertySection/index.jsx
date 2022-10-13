import React from 'react';
import PropertyItem from "./PropertyItem";

const PropertySection = () => {
    return (
        <section className="property" id="property">
            <div className="container">

                <p className="section-subtitle">Популярное</p>

                <h2 className="h2 section-title">Клиенты предпочитают</h2>

                <ul className="property-list has-scrollbar">

                    <PropertyItem />

                </ul>

            </div>
        </section>
    );
};

export default PropertySection;