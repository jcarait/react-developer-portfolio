import React from 'react';
import './Projects.scss';
import projectOne from '../../images/projects/portfolio-1.PNG';
import projectTwo from '../../images/projects/portfolio-2.PNG';
import projectThree from '../../images/projects/portfolio-3.PNG';

const Projects = () => {
  return (
    <section class="project-area" id="projects">
      <div class="container">
        <div class="project-title pb-5">
          <h1 class="text-uppercase title-h1">My</h1>
          <h1 class="text-uppercase title-h1">Projects</h1>
        </div>
        <div class="row grid">
          <div class="col">
            <div class="my-project">
              <div class="img">
                <a href="https://jcarait.github.io/recipe-relish-app/">
                  <img src={projectOne} alt="project-1"></img>
                </a>
              </div>
              <div class="title py-4">
                <h4 class="text-uppercase">Recipe App</h4>
                <span class="text-secondary">Portfolio</span>
                <span class="link-github-repo">
                  <a href="https://github.com/jcarait/recipe-app">
                    Github Repo
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="my-project">
              <div class="img">
                <a href="https://jcarait.github.io/weather-dashboard/">
                  <img src={projectTwo} alt="project-1"></img>
                </a>
              </div>
              <div class="title py-4">
                <h4 class="text-uppercase">Weather Dashboard</h4>
                <span class="text-secondary">Portfolio</span>
                <span class="link-github-repo">
                  <a href="https://github.com/jcarait/weather-dashboard">
                    Github Repo
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="my-project">
              <div class="img">
                <a href="https://jcarait.github.io/work-day-scheduler/">
                  <img src={projectThree} alt="project-1"></img>
                </a>
              </div>
              <div class="title py-4">
                <h4 class="text-uppercase">Work Day Scheduler</h4>
                <span class="text-secondary">Portfolio</span>
                <span class="link-github-repo">
                  <a href="https://github.com/jcarait/work-day-scheduler">
                    Github Repo
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
