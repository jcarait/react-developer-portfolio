import React from 'react';
import './about.scss';
import aboutImage from '../assets/about.jpg';

const About = () => {
  return (
    <section className="about">
      <div className="about-text">
        <h2>About me</h2>
        <p>
          Front-end web developer with a certificate in full stack development
          from University of Sydney, with skills in MERN stack. With over 10
          years in customer service and 8 years in the security industry,
          excited leverage these experiences in web development.
        </p>
        <p>My hobbies are programming, music and seeking out great food.</p>
      </div>
      <div className="about-img">
        <img src={aboutImage} alt="a man holding sun in hands"></img>
      </div>
    </section>
  );
};

export default About;
