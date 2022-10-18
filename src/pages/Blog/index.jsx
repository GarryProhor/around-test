import React from 'react';
import Helmet from "../../components/Helmet";
import CommonSection from "../../components/CommonSection";
import {blogList} from "../../assets/data/blogList";
import BlogItemSection from "../../components/BlogSection/BlogItemSection";
import './Blog.css';

const Blog = () => {
    return (
        <Helmet title='Блог'>
            <CommonSection title='Блог'/>
            <section className="blog" id="blog">
                <div className="container">
                    <ul className="blog-list">
                        {
                            blogList.map(item => <BlogItemSection key={item.id} item={item}/>)
                        }
                    </ul>
                </div>
            </section>
        </Helmet>
    );
};

export default Blog;
