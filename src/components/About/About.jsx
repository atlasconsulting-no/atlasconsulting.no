import React from 'react';
import './About.css';
import images from '../../constants/images';

const About = () => {
  return (
    <section className="about section-p bg-dark" id="about">
      <div className="container">
        <div className="about-content grid">
          <div className="content-left">
            <img src={images.about_main_img} alt="" />
          </div>
          <div className="content-right section-t">
            <h3 className="text-center">About Us</h3>
            <p className="text text-justify">
              Atlas Consulting is a company with a clear mission and goal - empowering businesses through technology.
              Offering services in software development, digital innovation and information security, 
              we foster a culture of continuous improvement with the focus of always delivering the most value to our clients.
              We believe that the best consultants are those who enjoy their work
              and strive to continuously develop high quality software and themselves.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
