import React from 'react';
import Navbar from '../Navbar/Navbar';
import "./Header.scss";
import {FaPaperPlane} from "react-icons/fa";

const Header = () => {
  return (
    <header className='header flex flex-center flex-column'>
        <Navbar />
        <div className='container'>
            <div className='header-content text-center flex flex-column'>
                <h1 className='text-uppercase header-title'>atlas <br/> consulting</h1>
                <p className='text-lead'>Empowering Your World</p>
                {/*
                <a href = "/" className='btn header-btn btn-blue'>
                    <FaPaperPlane /> <span>get started</span>
                </a>
                */}
            </div>
        </div>
    </header>
  )
}

export default Header