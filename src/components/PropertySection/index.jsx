import React from 'react';
import PropertyItem from "./PropertyItem";
import './Property.css';
import {propertyList} from "../../assets/data/propertyList";

const PropertySection = () => {
    return (
        <section className="property" id="property">
            <div className="container">

                <p className="section-subtitle">Популярное</p>

                <h2 className="h2 section-title">Клиенты предпочитают</h2>

                <ul className="property-list has-scrollbar">
                    {
                        propertyList.map((item) => <PropertyItem key={item.id} item={item}/>)
                    }
                </ul>

            </div>
        </section>
    );
};

export default PropertySection;