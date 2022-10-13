import React from 'react';
import image from '../../assets/images/banner_6.png';


const PropertyItem = () => {
    return (
      <>
          <li>
              <div className="property-card">

                  <figure className="card-banner">

                      <a href="#">
                          <img src={image} alt="New Apartment Nice View"
                               className="w-100"/>
                      </a>

                      <div className="card-badge green">For Rent</div>

                      <div className="banner-actions">

                          <button className="banner-actions-btn">
                              <ion-icon name="location"></ion-icon>

                              <address>Belmont Gardens, Chicago</address>
                          </button>

                          <button className="banner-actions-btn">
                              <ion-icon name="camera"></ion-icon>

                              <span>4</span>
                          </button>

                          <button className="banner-actions-btn">
                              <ion-icon name="film"></ion-icon>

                              <span>2</span>
                          </button>

                      </div>

                  </figure>

                  <div className="card-content">

                      <div className="card-price">
                          <strong>$34,900</strong>/Month
                      </div>

                      <h3 className="h3 card-title">
                          <a href="#">New Apartment Nice View</a>
                      </h3>

                      <p className="card-text">
                          Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood
                      </p>

                      <ul className="card-list">

                          <li className="card-item">
                              <strong>3</strong>

                              <ion-icon name="bed-outline"></ion-icon>

                              <span>Bedrooms</span>
                          </li>

                          <li className="card-item">
                              <strong>2</strong>

                              <ion-icon name="man-outline"></ion-icon>

                              <span>Bathrooms</span>
                          </li>

                          <li className="card-item">
                              <strong>3450</strong>

                              <ion-icon name="square-outline"></ion-icon>

                              <span>Square Ft</span>
                          </li>

                      </ul>

                  </div>

                  <div className="card-footer">

                      <div className="card-author">

                          <figure className="author-avatar">
                              <img src="./assets/images/author.jpg" alt="William Seklo" className="w-100"/>
                          </figure>

                          <div>
                              <p className="author-name">
                                  <a href="#">William Seklo</a>
                              </p>

                              <p className="author-title">Estate Agents</p>
                          </div>

                      </div>

                      <div className="card-footer-actions">

                          <button className="card-footer-actions-btn">
                              <ion-icon name="resize-outline"></ion-icon>
                          </button>

                          <button className="card-footer-actions-btn">
                              <ion-icon name="heart-outline"></ion-icon>
                          </button>

                          <button className="card-footer-actions-btn">
                              <ion-icon name="add-circle-outline"></ion-icon>
                          </button>

                      </div>

                  </div>

              </div>
          </li>
      </>
    );
};

export default PropertyItem;