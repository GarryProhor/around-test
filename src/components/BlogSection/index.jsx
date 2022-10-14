import React from 'react';
import './BlogSection.css';
import {blogList} from "../../assets/data/blogList";
import BlogItemSection from "./BlogItemSection";

const BlogSection = () => {
    return (
        <section className="blog" id="blog">
            <div className="container">

                <p className="section-subtitle">Новости и Блог</p>

                <h2 className="h2 section-title">Лента новостей</h2>

                <ul className="blog-list has-scrollbar">
                    {
                        blogList.map(item => <BlogItemSection key={item.id} item={item}/>)
                    }
                </ul>
            </div>
        </section>

    );
};

export default BlogSection;