import React from 'react';
import "./Footer.css";

const Footer = () => {

    let date = new Date();

  return (
    <footer className='footer bg-black flex flex-center' id = "footer">
        <div className='container flex flex-center w-100'>
            <div className='grid footer-content text-center'>
                <span className='text'>post@atlasconsulting.no</span>    {/* must be bought or changed */}

                <span className='text'>Org nr: 927 606 313 </span>
                <span className='text'> &copy; Atlas Consulting AS</span>
            </div>
        </div>
    </footer>
  )
}

export default Footer
