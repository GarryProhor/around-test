import React from 'react';
import Helmet from "../../components/Helmet";
import Hero from "../../components/Hero";
import AboutSection from "../../components/AboutSection";
import ServiceSection from "../../components/ServiceSection";
import Cta from "../../components/Cta";

const Home = () => {
    return (
       <Helmet title='Главная'>
           <main>
               <article>
                    <Hero />

                    <AboutSection />

                    <ServiceSection />

                   <Cta />

               </article>
           </main>
       </Helmet>
    );
};

export default Home;
