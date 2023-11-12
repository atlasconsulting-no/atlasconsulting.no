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
              We are a team of dedicated IT professionals, united
              by a goal - empowering businesses through technology. Offering
              services in data analytics, digital innovation and project management, 
              we foster a culture of continuous improvement that benefits our teams
              and clients.
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
