import React from 'react';
import './Contact.css';
import CommonSection from "../../components/CommonSection";
import Helmet from "../../components/Helmet";
import {socialLink} from "../../assets/data/headerTop";
import {Col, Container, Row} from "reactstrap";
import {Link} from "react-router-dom";

const Contact = () => {
    return (
        <Helmet title="Контакты">
            <CommonSection title="Контакты" />
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="12">
                            <div className="contact__info">
                                <h6 className="fw-bold">Контакты</h6>
                                <p>
                                    ИП Грушник Ирина Федоровна<br/>
                                    220035 г. Минск, ул.Репина, 4-282
                                </p>
                                <div className="mt-2">
                                    <h6 className="fs-6 mb-0">Телефон:</h6>
                                    <p>
                                        +375 29 1 316 316<br/>
                                        +375 44 5 682 838
                                    </p>
                                </div>

                                <div className="mt-2">
                                    <h6 className="mb-0 fs-6">Email:</h6>
                                    <p>info@around.by</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg="6" md="6" sm="12">
                            <div className="contact__info">
                                <h6 className="fw-bold">Реквизиты</h6>
                                <p>
                                    № BY14PJCB30130676640000000933 <br/>
                                    в BYN в Приорбанк ОАО <br/>
                                    БИК: PJCBBY2X<br/>
                                    УНП: 193283318
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg='12'>
                            <div className="contact__info">
                                <h6 className="fw-bold mt-4">Подписывайтесь на нас</h6>

                                <div className=" d-flex align-items-center gap-4 mt-3">
                                    {socialLink.map(({url, icon}) => (
                                        <Link
                                            to={url}
                                            key={icon}
                                            className="social__link-icon"
                                        >
                                            <i className={icon}></i>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Contact;
