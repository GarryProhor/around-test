import React from 'react';
import {Link, NavLink} from "react-router-dom";
import logoAround from '../../assets/images/Around.png';
import {Container} from "reactstrap";
import {navLink} from "../../assets/data/navLink";

const HeaderBottom = () => {
    const menuRef = React.useRef(null);
    const toggleMenu = () => menuRef.current.classList.toggle('menu__active');
    return (
        <div className="main__navbar">
            <Container>
                <div className='navigation__wrapper d-flex align-items-center justify-content-between'>
                    <span className='mobile__menu'>
                        <i className="ri-menu-line" onClick={toggleMenu}></i>
                    </span>

                    <div className='logo'>
                            <Link to='/home' className='d-flex align-items-center gap-2'>
                                <img src={logoAround} alt='Around Logo'/>
                            </Link>
                    </div>

                    <div className='navigation' ref={menuRef} onClick={toggleMenu}>
                        <div className='menu'>
                            {
                                navLink.map(({path, display}) =>
                                    <NavLink to={path} key={path} className={navClass => navClass.isActive ? 'nav__active nav__item':'nav__item' }>{display}</NavLink>
                                )
                            }
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default HeaderBottom;
