import React from 'react';

import './home.scss';
import avatar from '../images/banner/banner-image.jpeg';

const Home = () => {
  return (
    <>
      <div className="container title">
        <h2 className="greeting">Hey there</h2>
        <h1 className="title-text">I'm Jonathan</h1>
        <span className="subtitle">Full Stack Developer</span>
      </div>
      <div className="container avatar">
        <img className="image" src={avatar} alt="male cartoon avatar"></img>
      </div>
    </>
  );
};

export default Home;
