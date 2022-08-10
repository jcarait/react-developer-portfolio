import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

import './home.scss';

const Home = () => {
  return (
    <>
      <div className="container title">
        {/* <h2 className="greeting">Hello</h2>
        <h1 className="title-text">I'm Jonathan</h1>
        <span className="subtitle">Full Stack Developer</span> */}
        <Typewriter words={['Hey there']} loop={1} typeSpeed={70} />
        <Typewriter words={["I'm Jonathan"]} loop={1} typeSpeed={80} />
        <Typewriter words={['Full Stack Developer']} loop={1} typeSpeed={90} />
      </div>
      {/* <div className="container avatar">
        <img className="image" src={avatar} alt="male cartoon avatar"></img>
      </div> */}
    </>
  );
};

export default Home;
