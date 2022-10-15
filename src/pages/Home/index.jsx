import React from 'react';
import Helmet from "../../components/Helmet";
import Hero from "../../components/Hero";
import AboutSection from "../../components/AboutSection";
import ServiceSection from "../../components/ServiceSection";
import Cta from "../../components/Cta";
import PropertySection from "../../components/PropertySection";
import BlogSection from "../../components/BlogSection";
import Partners from "../../components/Partners";

const Home = () => {
    return (
       <Helmet title='Главная'>
           <main>
               <article>
                    <Hero />

                    <AboutSection />

                    <ServiceSection />

                    <PropertySection />

                    <BlogSection />

                    <Partners />

                   <Cta />

               </article>
           </main>
       </Helmet>
    );
};

export default Home;
