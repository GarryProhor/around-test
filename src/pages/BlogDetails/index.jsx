import React, {useEffect} from 'react';
import './BlogDetails.css';
import Helmet from "../../components/Helmet";
import {Link, useParams} from "react-router-dom";
import {blogList} from "../../assets/data/blogList";
import {Col, Container, Row} from "reactstrap";

const BlogDetails = () => {
    const {slug} = useParams();
    const blog = blogList.find((blog) => blog.title === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [blog]);

    return (<Helmet title={blog.title}>
        <section>
            <Container>
                <Row>
                    <Col lg="8" md="8">
                        <div className="blog__details">
                            <img src={blog.image} alt="" className="w-100"/>
                            <h2 className="section__title mt-4">{blog.title}</h2>
                            <div className="blog__publisher d-flex align-items-center gap-4 mb-4">
                                <span className="blog__author">
                                     <i className="ri-user-line"></i> {blog.author}
                                </span>

                                <span className=" d-flex align-items-center gap-1 section__description">
                                      <i className="ri-calendar-line"></i> {blog.date}
                                </span>

                                <span className=" d-flex align-items-center gap-1 section__description">
                                      <i className="ri-time-line"></i> {blog.time}
                                </span>
                            </div>

                            <p className="section__description">{blog.description}</p>
                            <h6 className="ps-5 fw-normal">
                                <blockquote className="blog-text fs-4">{blog.quote}</blockquote>
                            </h6>
                            <p className="section__description pb-3">{blog.description}</p>
                        </div>
                    </Col>

                    <Col lg="4" md="4">
                        <div className="recent__post mb-4">
                            <h5 className=" fw-bold">Недавние Посты</h5>
                        </div>
                        {blogList.map(({id, image, title}) => (
                            <div className="recent__blog-post mb-4" key={id}>
                                <div className="recent__blog-item d-flex gap-3">
                                    <img src={image} alt="" className="w-25 rounded-2"/>
                                    <h6>
                                        <Link to={`/blogs/${title}`}>{title}</Link>
                                    </h6>
                                </div>
                            </div>))}
                    </Col>
                </Row>
            </Container>
        </section>
    </Helmet>);
};

export default BlogDetails;
