import React from 'react';
import './Header.css';
import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";

const Header = () => {
    return (
        <header className="header">
            <div className="overlay"></div>

            <HeaderTop />
            <HeaderBottom />
        </header>
    );
};

export default Header;
