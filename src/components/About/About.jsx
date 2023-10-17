import React from 'react';
import './About.css';
import images from '../../constants/images';

const About = () => {
  return (
    <section className="about section-p bg-dark" id="about">
      <div className="container">
        <div className="about-content grid text-center">
          <div className="content-left">
            <img src={images.about_main_img} alt="" />
          </div>
          <div className="content-right">
            <div className="section-t">
              <h3 className="text-start">About Us</h3>
            </div>
            <p className="text text-start">
              We are a team of dedicated and experienced IT professionals, united
              by a common goal - to empower businesses through technology. We are
              experts in data analytics, digital innovation and project management.
            </p>
            <p className="text text-start">
              We believe that the best consultants are those who enjoy their work
              and who strive to not only develop software, but also to develop
              themselves. Through this, we aim to foster a culture of continuous
              improvement that benefits not only our team but also you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
