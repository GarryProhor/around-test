import React from 'react';
import {Link} from "react-router-dom";

const BlogItemSection = ({item}) => {
    const {image, title, author, date} = item;
    return (
        <>
            <li>
                <div className="blog-card">

                    <figure className="card-banner">
                        <img src={image} alt={title} className="w-100"/>
                    </figure>

                    <div className="blog-content">

                        <div className="blog-content-top">

                            <ul className="card-meta-list">
                                <li>
                                    <Link to="#" className="card-meta-link">
                                        <i className="ri-user-heart-line"></i>
                                        <span>{author}</span>
                                    </Link>
                                </li>
                            </ul>

                            <h3 className="h3 blog-title">
                                <Link to="/blog">{title}</Link>
                            </h3>
                        </div>

                        <div className="blog-content-bottom">
                            <div className="publish-date">
                                <i className="ri-calendar-check-line"></i>

                                <time dateTime={date}>{date}</time>
                            </div>

                            <a href="#" className="read-more-btn">Читать дальше</a>
                        </div>

                    </div>

                </div>
            </li>
        </>
    );
};

export default BlogItemSection;