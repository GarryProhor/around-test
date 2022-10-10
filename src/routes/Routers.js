import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Service from "../pages/Service";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='/home'/>}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/service' element={<Service />}/>
            <Route path='/blogs' element={<Blog />}/>
            <Route path='/blogs/:slug' element={<BlogDetails />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='*' element={<NotFound />}/>
        </Routes>
    );
};

export default Routers;
