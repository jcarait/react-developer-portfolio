import React from 'react';
import Card from '../components/card';
import './Projects.scss';

//import images
import projectOne from '../images/projects/portfolio-1.PNG';
import projectTwo from '../images/projects/portfolio-2.PNG';
import projectFour from '../images/projects/project-4.PNG';
import projectSix from '../images/projects/project-6.PNG';

const Projects = () => {
  const demoLinks = {
    two: 'https://jcarait.github.io/weather-dashboard/',
    one: 'https://carolinatnp.github.io/recipe-app/',
    six: 'https://tech-blog-by-jono.herokuapp.com/',
    four: 'https://act-of-random-kindness.herokuapp.com/',
  };

  const gitLinks = {
    two: 'https://github.com/jcarait/weather-dashboard',
    one: 'https://github.com/jcarait/recipe-relish-app',
    six: 'https://github.com/jcarait/tech-blog',
    four: 'https://github.com/jcarait/act-of-random-kindness',
  };

  return (
    <section className="project-area" id="projects">
      <div className="gap"></div>
      <div className="card-grid">
        <Card
          name="ARK"
          description="A charity task app for individuals to lend a helping hand to those in need"
          image={projectFour}
          demo={demoLinks.four}
          imageLink={demoLinks.four}
          github={gitLinks.four}
        />
        <Card
          name="Tech Blog"
          description="A blog board where users an share tech tips"
          image={projectSix}
          demo={demoLinks.six}
          imageLink={demoLinks.six}
          github={gitLinks.six}
        />
        <Card
          name="Recipe Relish"
          description="A recipe finder app"
          image={projectOne}
          demo={demoLinks.one}
          imageLink={demoLinks.one}
          github={gitLinks.one}
        />

        <Card
          name="Weather Dashboard"
          description="A weather dashboard made with Vanilla JS"
          image={projectTwo}
          demo={demoLinks.two}
          imageLink={demoLinks.two}
          github={gitLinks.two}
        />
      </div>
    </section>
  );
};

export default Projects;
