import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.scss";

const Navbar = () => {
    const [navToggle, setNavToggle] = useState(false);

    const navHandler = () => {
        setNavToggle(prevData => !prevData);
    }

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        // Close the mobile menu if it's open
        if (navToggle) {
            setNavToggle(false);
        }
    }

    return (
        <nav className='navbar w-100 flex'>
            <div className='container w-100'>
                <div className='navbar-content flex fw-7'>
                    <div className='brand-and-toggler flex flex-between w-100'>
                        <Link to="/" className='navbar-brand fs-26'>Atlas Consulting</Link>
                        <div type="button" className={`hamburger-menu ${navToggle ? 'hamburger-menu-change' : ""}`} onClick={navHandler}>
                            <div className='bar-top'></div>
                            <div className='bar-middle'></div>
                            <div className='bar-bottom'></div>
                        </div>
                    </div>

                    <div className={`navbar-collapse ${navToggle ? 'show-navbar-collapse' : ""}`}>
                        <div className='navbar-collapse-content'>
                            <ul className='navbar-nav'>
                                <li className='text-white' onClick={() => scrollToSection('home')}>
                                    <Link to="/">Home</Link>
                                </li>
                                <li className='text-white' onClick={() => scrollToSection('about')}>
                                    <Link to="/">About</Link>
                                </li>
                                <li className='text-white' onClick={() => scrollToSection('services')}>
                                    <Link to="/">Services</Link>
                                </li>
                                <li className='text-white' onClick={() => scrollToSection('consultants')}>
                                    <Link to="/">Consultants</Link>
                                </li>
                            </ul>
                            {/* Add more buttons for other sections as needed */}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
