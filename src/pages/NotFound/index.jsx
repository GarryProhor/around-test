import React from 'react';
import CommonSection from "../../components/CommonSection";
import Helmet from "../../components/Helmet";

const NotFound = () => {
    return (
        <Helmet title='Not found'>
            <CommonSection title='Страница не найдена'/>
        </Helmet>
    );
};

export default NotFound;
