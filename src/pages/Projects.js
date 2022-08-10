import React from 'react';
import Card from '../components/card';
import './Projects.scss';

//import images
import projectOne from '../assets/projects/portfolio-4.JPG';
import projectTwo from '../assets/projects/portfolio-1.PNG';
import projectFour from '../assets/projects/project-4.PNG';
import projectSix from '../assets/projects/project-6.PNG';

const Projects = () => {
  const demoLinks = {
    two: 'https://prime-toys.herokuapp.com/',
    one: 'https://carolinatnp.github.io/recipe-app/',
    four: 'https://act-of-random-kindness.herokuapp.com/',
  };

  const gitLinks = {
    two: 'https://github.com/jcarait/prime-toys',
    one: 'https://github.com/jcarait/recipe-relish-app',
    four: 'https://github.com/jcarait/act-of-random-kindness',
  };

  return (
    <section className="project-area" id="projects">
      <div className="gap"></div>
      <div className="card-grid">
        <Card
          name="Prime Toys"
          description="A toy trading and charity trading"
          image={projectOne}
          demo={demoLinks.two}
          imageLink={demoLinks.two}
          github={gitLinks.two}
        />
        <Card
          name="ARK"
          description="A charity task app for individuals to lend a helping hand to those in need"
          image={projectFour}
          demo={demoLinks.four}
          imageLink={demoLinks.four}
          github={gitLinks.four}
        />
        <Card
          name="Recipe Relish"
          description="A recipe finder app"
          image={projectTwo}
          demo={demoLinks.one}
          imageLink={demoLinks.one}
          github={gitLinks.one}
        />
      </div>
    </section>
  );
};

export default Projects;
