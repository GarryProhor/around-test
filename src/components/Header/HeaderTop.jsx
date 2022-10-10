import React from 'react';
import {Link} from "react-router-dom";
import {leftLink, socialLink} from "../../assets/data/headerTop";

const HeaderTop = () => {
    return (
        <div className="header-top">
            <div className="container">
                <ul className="header-top-list">
                    {
                        leftLink.map(({path, icon, text}) => (<li key={icon}>
                            <Link href={path} className="header-top-link">
                                <i className={icon}></i>
                                <span>{text}</span>
                            </Link>
                        </li>))
                    }
                </ul>
                <div className="wrapper">
                    <ul className="header-top-social-list">
                        {
                            socialLink.map(({path, icon}) => (
                                <li key={icon}>
                                    <Link href={path} className="header-top-social-link">
                                        <i className={icon}></i>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default HeaderTop;
