import React from 'react';
import {Link} from "react-router-dom";
import { motion } from "framer-motion"

const PropertyItem = ({item}) => {
    const {name, image, text, complexity, perennial} = item;
    return (
      <>
          <li>
              <div className="property-card">
                  <figure className="card-banner">
                      <Link to="#">
                          <img src={image} alt={name}
                               className="w-100"/>
                      </Link>
                      <div className="banner-actions">
                          <motion.button whileHover={{scale: 1.1}}  className="banner-actions-btn">
                              <i className="ri-plant-line"></i>
                              <address>{name}</address>
                          </motion.button>
                      </div>
                  </figure>
                  <div className="card-content">
                      <h3 className="h3 card-title">
                          <Link to="#">{name}</Link>
                      </h3>
                      <p className="card-text">{text}</p>
                      <ul className="card-list">
                          <li className="card-item">
                              <div className='d-flex align-content-center gap-1'>
                                  <strong>Многолетний</strong>
                                  <i className="ri-quill-pen-line"></i>
                              </div>
                              <span>{complexity}</span>
                          </li>
                          <li className="card-item">
                              <div className='d-flex align-content-center gap-1'>
                                  <strong>Сложность ухода</strong>
                                  <i className="ri-star-half-line"></i>
                              </div>
                              <span>{perennial}</span>
                          </li>
                      </ul>
                  </div>
              </div>
          </li>
      </>
    );
};

export default PropertyItem;